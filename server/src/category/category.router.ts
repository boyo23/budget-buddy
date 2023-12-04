import { Router } from 'express'
import type { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

//import { authenticateToken } from '@/utils/jwt'
import * as CategoryService from './category.service'

export const categoryRouter = Router()

// ADMIN ACCESS ONLY
categoryRouter.get('/', async (_: Request, res: Response) => {
  try {
    const expenses = await CategoryService.listCategories()
    return res.status(200).json(expenses)
  } catch (err: any) {
    return res.status(500).json(err.message)
  }
})

categoryRouter.post('/', body('name').isString(), async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const category = req.body
    const newCategory = await CategoryService.createCategory(category)
    return res.status(201).json(newCategory)
  } catch (err: any) {
    return res.status(500).json(err.message)
  }
})
