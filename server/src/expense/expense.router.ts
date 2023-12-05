import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

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
      .withMessage((value) => `${value} not included in the available payment methods`),
    body('date')
      .matches(/^\d{4}-\d{2}-\d{2}$/)
      .withMessage('Date must be in YYYY-MM-DD format'),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
      }

      const newExpense = await ExpenseServices.createExpense(request.body)

      return response.status(201).json(newExpense)
    } catch (error: any) {
      console.error('Error creating expense:', error)
      return response.status(500).json({ message: 'Internal Server Error' })
    }
  },
)
