import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import crypto from 'crypto'

import * as UserServices from './user.service'

export const userRouter = Router()

userRouter.post(
  '/register',
  [
    body('username').custom(async (value) => {
      if (await UserServices.findUser(value)) {
        throw new Error('Username is already in use')
      }
    }),
    /* prettier-ignore */
    body('password')
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
      .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
      .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
      .matches(/\d/).withMessage('Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .custom(async (value) => {
        if (await UserServices.findUser(value)) {
          throw new Error('Username is already in use')
        }
      }),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
      }

      const hashedPassword = crypto.createHash('sha256').update(request.body.password).digest('hex')
      const user = { ...request.body, password: hashedPassword }

      const newUser = await UserServices.createUser(user)

      return response.status(201).json(newUser)
    } catch (error: any) {
      console.error('Error creating user:', error)
      return response.status(500).json({ error: 'Internal Server Error' })
    }
  },
)
