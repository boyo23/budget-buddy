import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Category = {
  id: string
  name: string
}

const listCategories = async (): Promise<Omit<Category, 'id'>[]> => {
  return prisma.category.findMany({
    select: {
      id: false,
      name: true,
    },
  })
}

const getCategoryById = async (id: string): Promise<Category | null> => {
  return prisma.category.findUnique({
    where: { id },
  })
}

const getCategoryByName = async (name: string): Promise<Category | null> => {
  return prisma.category.findUnique({
    where: { name },
  })
}

const createCategory = async (name: string): Promise<Category> => {
  return prisma.category.create({
    data: { name },
  })
}

const updateCategory = async (id: string, name: string): Promise<Category> => {
  return prisma.category.update({
    where: { id },
    data: { name },
  })
}

const deleteCategory = async (id: string): Promise<void> => {
  await prisma.category.delete({
    where: { id },
  })
}

export { Category, listCategories, getCategoryById, getCategoryByName, createCategory, updateCategory, deleteCategory }
