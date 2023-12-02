import { PrismaClient } from '@prisma/client'

type User = {
  id: string
  email: string
  username: string
  password: string
  threshold: number
  role: string
}

const prisma = new PrismaClient()

export { User }
