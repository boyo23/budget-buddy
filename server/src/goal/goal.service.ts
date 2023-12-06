import { PrismaClient } from '@prisma/client'
import type { Goal } from '@prisma/client'

const prisma = new PrismaClient()

const createGoal = async (goal: Omit<Goal, 'id' | 'addedAt'>): Promise<Goal> => {
  const { name, amount, targetedAt, userId } = goal
  return prisma.goal.create({
    data: {
      name,
      amount,
      targetedAt,
      userId,
    },
  })
}

const deleteGoal = async (id: string): Promise<void> => {
  await prisma.goal.delete({ where: { id } })
}

export { createGoal, deleteGoal }
