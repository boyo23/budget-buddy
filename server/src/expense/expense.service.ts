import { PrismaClient } from '@prisma/client'
import type { User } from '@/user/user.service'
import type { Category } from '@/category/category.service'

const prisma = new PrismaClient()

type Expense = {
  id: string
  price: number
  quantity: number
  date: string
  paymentMethod: string
  category: Category
  user: User
}

// GET

// POST

// PUT

// DELETE

export { Expense }
