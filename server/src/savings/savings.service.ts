import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Savings = {
  id: string
  amount: number
  date: string
  goalId: string
}

// GET

// POST

// PUT

// DELETE

export { Savings }
