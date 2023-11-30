import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Goal = {
  id: string
  name: string
  addedAt: string
  targetedAt: string
  userId: string
}

// GET

// POST

// PUT

// DELETE

export { Goal }
