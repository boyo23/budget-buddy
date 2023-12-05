import { PrismaClient } from '@prisma/client'
import type { User, Expense } from '@prisma/client'

const prisma = new PrismaClient()

const findUser = async (key: string): Promise<User | null> => {
  return prisma.user.findFirst({
    where: {
      OR: [{ id: key }, { username: key }, { email: key }],
    },
  })
}

const findExpenses = async (id: string): Promise<{ expenses: Expense[] } | null> => {
  return prisma.user.findFirst({
    where: { id },
    select: { expenses: true },
  })
}

const createUser = async (user: User): Promise<User> => {
  const { username, password, email } = user
  return prisma.user.create({
    data: {
      username,
      password,
      email,
    },
  })
}

export { findUser, findExpenses, createUser }
