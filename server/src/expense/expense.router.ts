import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import { authenticateToken } from '../utils/jwt'
import * as ExpenseServices from './expense.service'
import { findCategory } from '../category/category.service'

export const expenseRouter = Router()

expenseRouter.post(
  '/create',
  authenticateToken,
  [
    body('name').exists().isString(),
    body('price').exists().isNumeric().toFloat(),
    body('quantity').exists().isNumeric().toInt(10),
    body('date')
      .exists()
      .isDate()
      .customSanitizer((date) => new Date(date).toISOString()),
    body('paymentMethod')
      .exists()
      .isString()
      .isIn(['CASH', 'GCASH', 'CREDIT', 'DEBIT'])
      .withMessage((paymentMethod) => `The payment method ${paymentMethod} is invalid.`),
    body('categoryId').exists().isString(),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const newExpense = await ExpenseServices.createExpense({ ...request.body, userId: request.user.id })
      const category = await findCategory(newExpense.categoryId)

      if (!category) {
        return response.status(404).json({ message: 'Category not found' })
      }

      return response.status(201).json({ category: category.name, ...newExpense })
    } catch (error: any) {
      return response.status(500).json({ message: `An error occurred while processing your request: ${error.message}` })
    }
  },
)

expenseRouter.put(
  '/update',
  authenticateToken,
  [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('price').exists().isNumeric().toFloat(),
    body('date')
      .exists()
      .isDate()
      .customSanitizer((date) => new Date(date).toISOString()),
    body('quantity').exists().isNumeric().toInt(10),
    body('paymentMethod')
      .exists()
      .isString()
      .isIn(['CASH', 'GCASH', 'CREDIT', 'DEBIT'])
      .withMessage((paymentMethod) => `The payment method ${paymentMethod} is invalid.`),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const updatedExpense = await ExpenseServices.updateExpense({ ...request.body })

      return response.status(201).json(updatedExpense)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occurred while processing your request: ${error.message}` })
    }
  },
)

expenseRouter.delete(
  '/delete',
  authenticateToken,
  body('id').exists().isString(),
  async (request: Request, response: Response) => {
    try {
      const { name } = await ExpenseServices.deleteExpense(request.body.id)

      return response.status(201).json({ message: `Successfully deleted ${name}` })
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)
