import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import { authenticateToken } from '../utils/jwt'
import * as CategoryServices from './category.service'

export const categoryRouter = Router()

categoryRouter.post(
  '/',
  body('name').custom(async (value) => {
    if (await CategoryServices.findCategory(value)) {
      throw new Error('Category already exist')
    }
  }),
  authenticateToken,
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const category = await CategoryServices.createCategory(request.body.name, request.body.userId)

      return response.status(201).json(category)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)
