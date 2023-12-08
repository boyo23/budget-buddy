import { PrismaClient } from '@prisma/client'
import type { Category, Expense, Goal, User } from '@prisma/client'

const prisma = new PrismaClient()

const findCategories = async (id: string): Promise<{ categories: Category[] } | null> => {
  return prisma.user.findFirst({
    where: { id },
    select: { categories: true },
  })
}

const findExpenses = async (id: string): Promise<{ expenses: Expense[] } | null> => {
  return prisma.user.findFirst({
    where: { id },
    select: { expenses: true },
  })
}

const findGoals = async (id: string): Promise<{ goals: Goal[] } | null> => {
  return prisma.user.findFirst({
    where: { id },
    select: {
      goals: {
        select: {
          id: true,
          name: true,
          amount: true,
          addedAt: true,
          targetedAt: true,
          userId: true,
          savings: true,
        },
      },
    },
  })
}

const findUser = async (key: string): Promise<User | null> => {
  return prisma.user.findFirst({
    where: { OR: [{ id: key }, { username: key }, { email: key }] },
  })
}

const createUser = async (
  user: Pick<User, 'username' | 'password' | 'email'>,
): Promise<Omit<User, 'id' | 'password'>> => {
  const { username, password, email } = user
  return prisma.user.create({
    data: {
      username,
      password,
      email,
    },
  })
}

const updateUser = async (
  user: Pick<User, 'id' | 'username' | 'password' | 'threshold'>,
): Promise<Omit<User, 'id' | 'password'>> => {
  const { id, username, password, threshold } = user
  return prisma.user.update({
    where: { id },
    data: {
      username,
      password,
      threshold,
    },
  })
}

const deleteUser = async (id: string): Promise<Pick<User, 'username'>> => {
  return prisma.user.delete({
    where: { id },
    select: { username: true },
  })
}

export { findCategories, findExpenses, findGoals, findUser, createUser, updateUser, deleteUser }
