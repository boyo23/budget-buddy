import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import { authenticateToken } from '../utils/jwt'
import * as SavingsServices from './savings.service'

export const savingsRouter = Router()

savingsRouter.post(
  '/create',
  [
    body('amount').exists().isNumeric().toFloat(),
    body('date')
      .exists()
      .isDate()
      .customSanitizer((date) => new Date(date).toISOString()),
    body('goalId').exists().isString(),
  ],
  authenticateToken,
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const newSavings = await SavingsServices.createSavings(request.body)

      return response.status(201).json(newSavings)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)

savingsRouter.put(
  '/update',
  authenticateToken,
  [
    body('id').exists().isString(),
    body('amount').exists().isNumeric().toFloat(),
    body('date')
      .exists()
      .isDate()
      .customSanitizer((date) => new Date(date).toISOString()),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ messages: errors.array() })
      }

      const updatedSavings = await SavingsServices.updateSavings(request.body)

      return response.status(201).json(updatedSavings)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)

savingsRouter.delete(
  '/delete',
  authenticateToken,
  body('id').exists().isString(),
  async (request: Request, response: Response) => {
    try {
      const { amount } = await SavingsServices.deleteSavings(request.body.id)

      return response.status(201).json({ message: `Successfully deleted ${amount}` })
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)
