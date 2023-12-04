import { User, PrismaClient } from '@prisma/client'

type UserRead = Omit<User, 'password' | 'email' | 'role'>
type UserWrite = Omit<User, 'id' | 'role' | 'threshold' | 'createdAt' | 'updatedAt'>

/*type UserExtended = UserRead & {
  categories: Category[]
  expenses: Expense[]
  goals: Goal[]
}*/

//type UserCategories = Omit<UserExtended, 'expenses', 'goals'>
//type UserExpenses = Omit<UserExtended, 'categories', 'goals'>
//type UserGoals = Omit<UserExtended, 'categories', 'expenses'>

const prisma = new PrismaClient()

const listUsers = async (): Promise<UserRead[]> => {
  return prisma.user.findMany({
    select: {
      id: true,
      username: true,
      threshold: true,
      createdAt: true,
      updatedAt: true,
    },
  })
}

/*const listUserCategories = async (id: string): Promise<UserCategories> => {
  return prisma.user.findFirst({
    select: {
      id: true,
      username: true,
      threshold: true,
      createdAt: true,
      updatedAt: true,
      categories: true,
    },
    where: { id },
  })
}*/

/*const listUserExpenses = async (id: string): Promise<UserExpenses> => {
  return prisma.user.findFirst({
    select: {
      id: true,
      username: true,
      threshold: true,
      createdAt: true,
      updatedAt: true,
      expenses: true,
    },
    where: { id },
  })
}*/

/*const listUserGoals = async (id: string): Promise<UserGoals> => {
  return prisma.user.findFirst({
    select: {
      id: true,
      username: true,
      threshold: true,
      createdAt: true,
      updatedAt: true,
      goals: true,
    },
    where: { id },
  })
}*/

const getUserById = async (id: string): Promise<UserRead | null> => {
  return prisma.user.findUnique({
    where: { id },
  })
}

const getUserByUsername = async (username: string): Promise<UserRead | null> => {
  return prisma.user.findUnique({
    where: { username },
  })
}

const getUserByEmail = async (email: string): Promise<UserRead | null> => {
  return prisma.user.findUnique({
    where: { email },
  })
}

const createUser = async (user: UserWrite): Promise<User> => {
  const { username, password, email } = user
  return prisma.user.create({
    data: {
      username,
      password,
      email,
    },
  })
}

export {
  listUsers,
  //listUserCategories,
  //listUserExpenses,
  //listUserGoals,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  createUser,
}
