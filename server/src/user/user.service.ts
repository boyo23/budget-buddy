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

const listUsers = async (): Promise<Omit<User, 'email' | 'password'>[]> => {
  return prisma.user.findMany({
    select: {
      id: true,
      email: false,
      username: true,
      password: false,
      threshold: true,
      role: true,
      expenses: false,
      goals: false,
      createdAt: false,
      updatedAt: false,
    },
  })
}

const findUserByUsername = async (): Promise<Omit<User, 'email' | 'password'>> | null => {
  return prisma.user.findUnique({
    select: {
      id: true,
      email: false,
      username: true,
      password: false,
      threshold: true,
      role: true,
      expenses: false,
      goals: false,
      createdAt: false,
      updatedAt: false,
    },
    where: {
      username,
    },
  })
}

const createUser = async (user: Omit<User, 'id' | 'threshold' | 'role'>): Promise<User> => {
  const { email, username, password } = user
  return prisma.user.create({
    select: {
      id: true,
      email: true,
      username: true,
      password: true,
      threshold: true,
      role: true,
      expenses: true,
      goals: true,
      createdAt: true,
      updatedAt: true,
    },
    data: {
      email,
      username,
      password,
    },
  })
}

export { User, listUsers, findUserByUsername, createUser }
