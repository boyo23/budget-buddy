import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import { authenticateToken } from '../utils/jwt'
import * as ExpenseServices from './expense.service'

export const expenseRouter = Router()

expenseRouter.post(
  '/create',
  [
    body('name').isString(),
    body('price').toFloat(),
    body('quantity').toInt(10),
    body('paymentMethod')
      .isString()
      .isIn(['CASH', 'GCASH', 'CREDIT', 'DEBIT'])
      .withMessage((value) => `The payment method ${value} is invalid.`),
    body('date')
      .custom((value) => {
        const parsedDate = new Date(value);
        if (isNaN(parsedDate.getTime())) {
          throw new Error('Invalid date format. Enter the date in a valid format.');
        }
        return true;
      })
  ],
  authenticateToken,
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
      }

      // Now `request.body.date` should be a valid ISO string
      const isoDateString = new Date(request.body.date).toISOString();

      const newExpense = await ExpenseServices.createExpense({ ...request.body, userId: request.user.id, date: isoDateString })

      return response.status(201).json(newExpense)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occurred while processing your request: ${error.message}` })
    }
  },
)

expenseRouter.post('/delete', authenticateToken, async (request: Request, response: Response) => {
  try {
    const { id, name } = await ExpenseServices.deleteExpense(request.body.id)

    if (id !== request.body.id) {
      return response.status(500).json({ message: 'Expense does not exist' })
    }

    return response.status(201).json({ message: `Successfully deleted ${name}` })
  } catch (error: any) {
    return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
  }
})
