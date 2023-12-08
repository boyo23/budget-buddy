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

const updateCategory = async (category: Omit<Category, 'userId'>): Promise<Pick<Category, 'name'>> => {
  const { id, name } = category
  return prisma.category.update({
    where: { id },
    data: { name },
  })
}

const deleteCategory = async (id: string): Promise<Pick<Category, 'name'>> => {
  return prisma.category.delete({
    where: { id },
    select: { name: true },
  })
}

export { findCategory, createCategory, updateCategory, deleteCategory }
