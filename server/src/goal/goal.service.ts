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

const deleteGoal = async (id: string): Promise<Pick<Goal, 'id' | 'name'>> => {
  return prisma.goal.delete({
    where: { id },
    select: {
      id: true,
      name: true,
    },
  })
}

export { createGoal, deleteGoal }
