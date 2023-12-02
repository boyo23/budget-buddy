import { PrismaClient } from '@prisma/client'
import { GoalRead as Goal } from '@/goal/goal.service'

const prisma = new PrismaClient()

type SavingsRead = {
  id: string
  amount: number
  date: string
  goal: Goal
}

type SavingsWrite = {
  id: string
  amount: number
  date: string
  goalId: string
}

export { SavingsRead, SavingsWrite }
