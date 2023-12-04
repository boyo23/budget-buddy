import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import * as ExpenseService from './expense.service'

export const expenseRouter = Router()

expenseRouter.post(
  '/',
  [
    body('price').isNumeric().withMessage('Price is not numeric'),
    body('quantity').isNumeric().withMessage('Quantity is not numeric'),
    body('date').isISO8601().withMessage('Date is not in the right format (ISO8601)').toDate(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const expense = req.body
      const newExpense = await ExpenseService.createExpense(expense)
      return res.status(201).json(newExpense)
    } catch (err: any) {
      return res.status(500).json(err.message)
    }
  },
)
