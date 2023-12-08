import { PrismaClient } from '@prisma/client'
import type { Expense } from '@prisma/client'

const prisma = new PrismaClient()

const createExpense = async (expense: Omit<Expense, 'id'>): Promise<Expense> => {
  const { name, price, quantity, date, paymentMethod, categoryId, userId } = expense
  return prisma.expense.create({
    data: {
      name,
      price,
      quantity,
      date,
      paymentMethod,
      categoryId,
      userId,
    },
  })
}

const updateExpense = async (expense: Omit<Expense, 'userId' | 'categoryId'>): Promise<Expense> => {
  const { id, name, price, quantity, date, paymentMethod } = expense
  return prisma.expense.update({
    where: { id },
    data: {
      name,
      price,
      quantity,
      date,
      paymentMethod,
    },
  })
}

const deleteExpense = async (id: string): Promise<Pick<Expense, 'name'>> => {
  return prisma.expense.delete({
    where: { id },
    select: { name: true },
  })
}

export { createExpense, updateExpense, deleteExpense }
