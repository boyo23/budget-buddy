import { PrismaClient } from '@prisma/client'
import type { Savings } from '@prisma/client'

const prisma = new PrismaClient()

const createSavings = async (savings: Omit<Savings, 'id'>): Promise<Savings> => {
  const { amount, date, goalId } = savings
  return prisma.savings.create({
    data: {
      amount,
      date,
      goalId,
    },
  })
}

const deleteSavings = async (id: string): Promise<Pick<Savings, 'id' | 'amount'>> => {
  return prisma.savings.delete({
    where: { id },
    select: {
      id: true,
      amount: true,
    },
  })
}

export { createSavings, deleteSavings }
