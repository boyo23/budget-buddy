import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Category = {
  id: string
  name: string
}

export { Category }
