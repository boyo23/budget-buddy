import { PrismaClient } from '@prisma/client'
import type { Category, Expense, User } from '@prisma/client'

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

const findUser = async (key: string): Promise<User | null> => {
  return prisma.user.findFirst({
    where: {
      OR: [{ id: key }, { username: key }, { email: key }],
    },
  })
}

const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const { username, password, email } = user
  return prisma.user.create({
    data: {
      username,
      password,
      email,
    },
  })
}

export { findCategories, findExpenses, findUser, createUser }
