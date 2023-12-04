import { PrismaClient } from '@prisma/client'
import { Category } from '@/category/category.service'
import { User } from '@/user/user.service'

type ExpenseRead = {
  id: string
  price: number
  quantity: number
  date: Date
  paymentMethod: string
  category: Category
  user: Omit<User, 'email' | 'password'>
}

type ExpenseWrite = {
  id: string
  price: number
  quantity: number
  date: Date
  paymentMethod: string
  categoryId: string
  userId: string
}

const prisma = new PrismaClient()

const createExpense = async (expense: Omit<ExpenseWrite, 'id'>): Promise<ExpenseWrite> => {
  const { price, quantity, date, paymentMethod, categoryId, userId } = expense
  return prisma.expense.create({
    data: {
      price,
      quantity,
      date,
      paymentMethod,
      categoryId,
      userId,
    },
  })
}

export { ExpenseRead, ExpenseWrite, createExpense }
