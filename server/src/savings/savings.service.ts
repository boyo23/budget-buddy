import { PrismaClient } from '@prisma/client'
import { Goal } from '@/goal/goal.service'

const prisma = new PrismaClient()

type Savings = {
  id: string
  amount: number
  date: string
  goal: Goal
}

// GET

// POST

// PUT

// DELETE

export { Savings }
