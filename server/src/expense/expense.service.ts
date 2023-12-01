import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Expense = {
  id: string
  price: number
  quantity: number
  date: string
  paymentMethod: string
  categoryId: string
  userId: string
}

export { Expense }
