import { PrismaClient } from '@prisma/client'
import type { Expense } from '@prisma/client'

const prisma = new PrismaClient()

const createExpense = async (expense: Omit<Expense, 'id'>): Promise<Expense> => {
  const { name, price, quantity, date, paymentMethod, userId, categoryId } = expense
  return prisma.expense.create({
    data: {
      name,
      price,
      quantity,
      date,
      paymentMethod,
      userId,
      categoryId,
    },
  })
}

const deleteExpense = async (id: string): Promise<Pick<Expense, 'id' | 'name'>> => {
  return prisma.expense.delete({
    where: { id },
    select: {
      id: true,
      name: true,
    },
  })
}

export { createExpense, deleteExpense }
