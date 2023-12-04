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

const createUser = async (user: Omit<User, 'id' | 'threshold' | 'role'>): Promise<User> => {
  const { email, username, password } = user

  return prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  })
}

export { User, createUser }
