import { PrismaClient } from '@prisma/client'
import type { Expense } from '@prisma/client'

const prisma = new PrismaClient()

const createExpense = async (expense: Expense): Promise<Expense> => {
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

export { createExpense }
