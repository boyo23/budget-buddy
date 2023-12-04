import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

//import { authenticateToken } from '@/utils/jwt'
import * as GoalService from './goal.service'

export const goalRouter = Router()

// ADMIN ACCESS ONLY
goalRouter.get('/', async (_: Request, res: Response) => {
  try {
    const goals = await GoalService.listGoals()
    return res.status(200).json(goals)
  } catch (err: any) {
    return res.status(500).json(err.message)
  }
})

goalRouter.post(
  '/',
  [body('name').isString(), body('addedAt').isISO8601(), body('targetedAt').isISO8601(), body('userId').isString()],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const goal = req.body
      const newGoal = await GoalService.createGoal(goal)
      return res.status(201).json(newGoal)
    } catch (err: any) {
      return res.status(500).json(err.message)
    }
  },
)
