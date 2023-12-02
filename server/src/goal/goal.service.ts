import { PrismaClient } from '@prisma/client'
import { User } from '@/user/user.service'

const prisma = new PrismaClient()

type GoalRead = {
  id: string
  name: string
  addedAt: string
  targetedAt: string
  user: User
}

type GoalWrite = {
  id: string
  name: string
  addedAt: string
  targetedAt: string
  userId: string
}

export { GoalRead, GoalWrite }
