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

const updateSavings = async (savings: Omit<Savings, 'goalId'>): Promise<Savings> => {
  const { id, amount, date } = savings
  return prisma.savings.update({
    where: { id },
    data: {
      amount,
      date,
    },
  })
}

const deleteSavings = async (id: string): Promise<Pick<Savings, 'amount'>> => {
  return prisma.savings.delete({
    where: { id },
    select: {
      amount: true,
    },
  })
}

export { createSavings, updateSavings, deleteSavings }
