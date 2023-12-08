import { PrismaClient } from '@prisma/client'
import type { Goal } from '@prisma/client'

const prisma = new PrismaClient()

const findGoal = async (name: string): Promise<Goal | null> => {
  return prisma.goal.findFirst({
    where: { name },
  })
}

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

const updateGoal = async (goal: Omit<Goal, 'userId' | 'categoryId'>): Promise<Goal> => {
  const { id, name, amount, targetedAt } = goal
  return prisma.goal.update({
    where: { id },
    data: {
      name,
      amount,
      targetedAt,
    },
  })
}

const deleteGoal = async (id: string): Promise<Pick<Goal, 'name'>> => {
  return prisma.goal.delete({
    where: { id },
    select: { name: true },
  })
}

export { findGoal, createGoal, updateGoal, deleteGoal }
