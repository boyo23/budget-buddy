import { User } from '@/user/user.service'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Goal = {
  id: string
  addedAt: string
  targetedAt: string
  user: User
}

// GET

// POST

// PUT

// DELETE

export { Goal }
