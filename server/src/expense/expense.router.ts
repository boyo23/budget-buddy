import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

//import { authenticateToken } from '@/utils/jwt'
import * as ExpenseService from './expense.service'

export const expenseRouter = Router()

// ADMIN ACCESS ONLY
expenseRouter.get('/', async (_: Request, res: Response) => {
  try {
    const expenses = await ExpenseService.listExpenses()
    return res.status(200).json(expenses)
  } catch (err: any) {
    return res.status(500).json(err.message)
  }
})

expenseRouter.post(
  '/',
  [
    body('price').isNumeric(),
    body('quantity').isNumeric(),
    body('date').isISO8601(),
    body('paymentMethod').isString(),
    body('categoryId').isString(),
    body('userId').isString(),
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
