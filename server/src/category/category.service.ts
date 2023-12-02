import { PrismaClient } from '@prisma/client'

type Category = {
  id: string
  name: string
}

const prisma = new PrismaClient()

export { Category }
