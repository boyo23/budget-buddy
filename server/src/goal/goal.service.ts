import { PrismaClient } from '@prisma/client'
import { User } from '@/user/user.service'

type GoalRead = {
  id: string
  name: string
  addedAt: Date
  targetedAt: Date
  User: Omit<User, 'email' | 'password'>
}

type GoalWrite = {
  id: string
  name: string
  addedAt: Date
  targetedAt: Date
  userId: string
}

const prisma = new PrismaClient()

const listGoals = async (): Promise<GoalRead[]> => {
  return prisma.goal.findMany({
    select: {
      id: true,
      name: true,
      addedAt: true,
      targetedAt: true,
      User: {
        select: {
          id: true,
          email: false,
          username: true,
          password: false,
          threshold: true,
          role: true,
        },
      },
    },
  })
}

const createGoal = async (goal: Omit<GoalWrite, 'id'>): Promise<GoalWrite> => {
  const { name, addedAt, targetedAt, userId } = goal
  return prisma.goal.create({
    select: {
      id: true,
      name: true,
      addedAt: true,
      targetedAt: true,
      userId: true,
    },
    data: {
      name,
      addedAt,
      targetedAt,
      userId,
    },
  })
}

export { GoalRead, GoalWrite, listGoals, createGoal }
