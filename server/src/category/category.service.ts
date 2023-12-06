import { PrismaClient } from '@prisma/client'
import type { Category } from '@prisma/client'

const prisma = new PrismaClient()

const findCategory = async (name: string): Promise<Category | null> => {
  return prisma.category.findFirst({
    where: { name },
  })
}

const createCategory = async (category: Omit<Category, 'id'>): Promise<Category> => {
  const { name, userId } = category
  return prisma.category.create({
    data: {
      name,
      userId,
    },
  })
}

const deleteCategory = async (id: string): Promise<void> => {
  await prisma.category.delete({ where: { id } })
}

export { findCategory, createCategory, deleteCategory }
