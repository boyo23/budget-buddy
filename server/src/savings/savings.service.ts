import { PrismaClient } from '@prisma/client'
import { GoalRead as Goal } from '@/goal/goal.service'

type SavingsRead = {
  id: string
  amount: number
  date: Date
  Goal: Goal
}

type SavingsWrite = {
  id: string
  amount: number
  date: Date
  goalId: string
}

const prisma = new PrismaClient()

export { SavingsRead, SavingsWrite }
