import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import { authenticateToken } from '../utils/jwt'
import * as GoalServices from './goal.service'
import { findGoals } from '../user/user.service'

export const goalRouter = Router()

goalRouter.post(
  '/create',
  authenticateToken,
  [
    body('name').exists().isString(),
    body('amount').exists().isNumeric().toFloat(),
    body('targetedAt')
      .exists()
      .isDate()
      .customSanitizer((date) => new Date(date).toISOString()),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const goalsResult = await findGoals(request.user.id)

      if (goalsResult) {
        const goalExists = goalsResult.goals.some((goal) => goal.name === request.body.name)
        if (goalExists) {
          return response.status(400).json({ message: 'Goal already exists for this user' })
        }
      }

      const newGoal = await GoalServices.createGoal({ ...request.body, userId: request.user.id })

      return response.status(201).json(newGoal)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)

goalRouter.put(
  '/update',
  authenticateToken,
  [
    body('id').exists().isString(),
    body('amount').exists().isNumeric().toFloat(),
    body('targetedAt')
      .exists()
      .isDate()
      .customSanitizer((date) => new Date(date).toISOString()),
  ],
  async (request: Request, response: Response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({ message: errors.array() })
      }

      const goalsResult = await findGoals(request.user.id)

      if (goalsResult) {
        const goalExists = goalsResult.goals.some((goal) => goal.name === request.body.name)
        if (goalExists) {
          return response.status(400).json({ message: 'Goal already exists for this user' })
        }
      }

      const updateGoal = await GoalServices.updateGoal({ ...request.body })

      return response.status(201).json(updateGoal)
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)

goalRouter.delete(
  '/delete',
  authenticateToken,
  body('id').exists().isString(),
  async (request: Request, response: Response) => {
    try {
      const { name } = await GoalServices.deleteGoal(request.body.id)

      return response.status(201).json({ message: `Successfully deleted ${name}` })
    } catch (error: any) {
      return response.status(500).json({ message: `An error occured while processing your request: ${error.message}` })
    }
  },
)
