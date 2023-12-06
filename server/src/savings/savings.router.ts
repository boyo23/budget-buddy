import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import { authenticateToken } from '../utils/jwt'
import * as SavingsServices from './savings.service'

export const savingsRouter = Router()

savingsRouter.post(
  '/',
  [
    body('amount').isNumeric(),
    body('target').isNumeric(),
    body('date')
      .matches(/^\d{4}-\d{2}-\d{2}$/)
      .withMessage('Invalid date format. Enter the date in the following format: YYYY-MM-DD.'),
  ],
  authenticateToken,
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
      }

      const savings = await SavingsServices.createSavings(request.body)

      return response.status(201).json(savings)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)
