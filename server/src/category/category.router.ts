import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import { authenticateToken } from '../utils/jwt'
import * as CategoryServices from './category.service'

export const categoryRouter = Router()

categoryRouter.post(
  '/create',
  authenticateToken,
  body('name')
    .exists()
    .isString()
    .notEmpty()
    .custom(async (name) => {
      if (await CategoryServices.findCategory(name)) {
        throw new Error('Category already exist')
      }
    }),
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const newCategory = await CategoryServices.createCategory({ ...request.body, userId: request.user.id })

      return response.status(201).json(newCategory)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)

categoryRouter.put(
  '/update',
  authenticateToken,
  [
    body('id').exists().isString(),
    body('name')
      .exists()
      .isString()
      .custom(async (value) => {
        if (await CategoryServices.findCategory(value)) {
          throw new Error('Category already exist')
        }
      }),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const updatedCategory = await CategoryServices.updateCategory({ ...request.body })

      return response.status(201).json(updatedCategory)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)

categoryRouter.delete(
  '/delete',
  authenticateToken,
  body('id').exists().isString(),
  async (request: Request, response: Response) => {
    try {
      const { name } = await CategoryServices.deleteCategory(request.body.id)

      return response.status(201).json({ message: `Successfully deleted ${name}` })
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)
