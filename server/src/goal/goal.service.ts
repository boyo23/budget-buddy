import { PrismaClient } from '@prisma/client'
import { User } from '@/user/user.service'

type GoalRead = {
  id: string
  name: string
  addedAt: Date
  targetedAt: Date
  user: Omit<User, 'email' | 'password'>
}

type GoalWrite = {
  id: string
  name: string
  addedAt: Date
  targetedAt: Date
  userId: string
}

const prisma = new PrismaClient()

export { GoalRead, GoalWrite }
