import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import { authenticateToken } from '@/utils/jwt'
import * as ExpenseServices from '@/expense/expense.service'

export const expenseRouter = Router()

expenseRouter.post(
  '/',
  [
    body('name').isString(),
    body('price').isNumeric(),
    body('quantity').isNumeric(),
    body('paymentMethod')
      .isString()
      .isIn(['CASH', 'GCASH', 'CREDIT', 'DEBIT'])
      .withMessage((value) => `The payment method ${value} is invalid.`),
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

      const newExpense = await ExpenseServices.createExpense(request.body)

      return response.status(201).json(newExpense)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)
