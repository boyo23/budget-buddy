import { PrismaClient } from '@prisma/client'
import { Category } from '@/category/category.service'
import { User } from '@/user/user.service'

type ExpenseRead = {
  id: string
  name: string
  price: number
  quantity: number
  date: Date
  paymentMethod: string
  Category: Category
  User: Omit<User, 'email' | 'password'>
}

type ExpenseWrite = {
  id: string
  name: string
  price: number
  quantity: number
  date: Date
  paymentMethod: string
  categoryId: string
  userId: string
}

const prisma = new PrismaClient()

const listExpenses = async (): Promise<ExpenseRead[]> => {
  return prisma.expense.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      quantity: true,
      date: true,
      paymentMethod: true,
      Category: {
        select: {
          id: true,
          name: true,
        },
      },
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

const createExpense = async (expense: Omit<ExpenseWrite, 'id'>): Promise<ExpenseWrite> => {
  const { name, price, quantity, date, paymentMethod, categoryId, userId } = expense
  return prisma.expense.create({
    select: {
      id: true,
      name: true,
      price: true,
      quantity: true,
      date: true,
      paymentMethod: true,
      categoryId: true,
      userId: true,
    },
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

export { ExpenseRead, ExpenseWrite, listExpenses, createExpense }
