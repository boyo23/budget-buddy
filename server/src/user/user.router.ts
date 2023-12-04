import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

//import { authenticateToken } from '@/utils/jwt'
import * as UserService from './user.service'

export const userRouter = Router()

// ADMIN ACCESS ONLY
userRouter.get('/', async (_: Request, res: Response) => {
  try {
    const user = await UserService.listUsers()
    return res.status(200).json(user)
  } catch (err: any) {
    return res.status(500).json(err.message)
  }
})

userRouter.post(
  '/',
  [
    body('email').isEmail().normalizeEmail().escape(),
    body('username').custom(async (value) => {
      try {
        const user = await UserService.findUserByUsername(value)
        if (user) {
          throw new Error('Username already in use')
        }
      } catch (err) {
        console.error(err)
        throw new Error('An error has occured when validating the username')
      }
    }),
    body('password')
      .isLength({ min: 8 })
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        'Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      ),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const user = req.body
      const newUser = await UserService.createUser(user)
      return res.status(201).json(newUser)
    } catch (err: any) {
      return res.status(500).json(err.message)
    }
  },
)
