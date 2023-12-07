import dotenv from 'dotenv'
import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { authenticateToken } from 'src/utils/jwt'
import * as UserServices from './user.service'

dotenv.config()

if (!process.env.SECRET_ACCESS_KEY) {
  console.error('Error: Environment variable `SECRET_ACCESS_KEY` does not exist!')
  process.exit(1)
}

const secretKey: string = process.env.SECRET_ACCESS_KEY as string

export const userRouter = Router()

userRouter.get('/', authenticateToken, async (request: Request, response: Response) => {
  try {
    return response.status(201).json(request.user)
  } catch (error: any) {
    return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
  }
})

userRouter.post(
  '/register',
  [
    body('username').custom(async (value) => {
      if (await UserServices.findUser(value)) {
        throw new Error('Username already exist')
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
          throw new Error('Email already in use')
        }
      }),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const hashedPassword = await bcrypt.hash(request.body.password, 10)
      const user = { ...request.body, password: hashedPassword }
      const newUser = await UserServices.createUser(user)

      return response.status(201).json(newUser)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)

userRouter.post('/login', async (request: Request, response: Response) => {
  try {
    const user = await UserServices.findUser(request.body.username)

    if (!user) {
      return response.status(404).json({ message: 'Username not found' })
    }

    const { password, ...userInfo } = user
    const isPasswordValid = await bcrypt.compare(request.body.password, password)

    if (!isPasswordValid) {
      return response.status(401).json({ message: 'Incorrect password' })
    }

    const token = jwt.sign(userInfo, secretKey, { expiresIn: '1h' })

    return response.status(201).json(token)
  } catch (error: any) {
    return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
  }
})
