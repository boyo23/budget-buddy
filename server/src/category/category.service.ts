import { PrismaClient } from '@prisma/client'

type Category = {
  id: string
  name: string
}

const prisma = new PrismaClient()

const listCategories = async (): Promise<Category[]> => {
  return prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  })
}

const createCategory = async (name: string): Promise<Category> => {
  return prisma.category.create({
    select: {
      id: true,
      name: true,
    },
    data: {
      name,
    },
  })
}

export { Category, listCategories, createCategory }
