import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type User = {
  id: string
  email: string
  username: string
  password: string
  role: string
}

// GET

const listUsers = async (): Promise<Omit<User, 'id' | 'password'>[]> => {
  return prisma.user.findMany({
    select: {
      id: false,
      email: true,
      username: true,
      password: false,
      role: true,
    },
  })
}

const getUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
  })
}

const getUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  })
}

const getUserByUsername = async (username: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { username },
  })
}

// POST

const createUser = async (user: Omit<User, 'id' | 'role'>): Promise<User> => {
  const { email, username, password } = user

  return prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  })
}

// PUT

const updateUser = async (id: string, user: Omit<User, 'id' | 'role'>): Promise<User> => {
  const { email, username, password } = user

  return prisma.user.update({
    where: { id },
    data: {
      email,
      username,
      password,
    },
  })
}

// DELETE

const deleteUser = async (id: string): Promise<void> => {
  await prisma.user.delete({
    where: { id },
  })
}

export { User, listUsers, getUserById, getUserByUsername, getUserByEmail, createUser, updateUser, deleteUser }
