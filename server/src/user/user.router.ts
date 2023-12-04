import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import crypto from 'crypto'

import * as UserServices from './user.service'

export const userRouter = Router()

const validateUsername = async (value: string) => {
  const user = await UserServices.getUserByUsername(value)
  if (user) {
    throw new Error('Conflict - Username already in use')
  }
}

userRouter.get('/', async (_: Request, res: Response) => {
  try {
    const users = await UserServices.listUsers()
    return res.status(201).json(users)
  } catch (err: any) {
    console.error('Error creating user:', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

userRouter.post(
  '/register',
  [
    body('username').custom(validateUsername),
    body('password')
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        'Password must be greater than 8 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      ),
    body('email').isEmail().normalizeEmail().escape(),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const hashedPassword = crypto.createHash('sha256').update(req.body.password).digest('hex')
      const user = { ...req.body, password: hashedPassword }

      const newUser = await UserServices.createUser(user)

      return res.status(201).json(newUser)
    } catch (error: any) {
      console.error('Error creating user:', error)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  },
)
