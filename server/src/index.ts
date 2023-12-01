import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // await prisma.user.create({
  //   data: {
  //     email: '19104146@usc.edu.ph',
  //     username: 'admin',
  //     password: '',
  //     role: 'ADMIN',
  //   },
  // })

  const users = await prisma.user.findMany({
    select: {
      id: false,
      email: true,
      username: true,
      password: false,
      role: true,
    },
  })

  console.table(users)
}

main()
  .catch((error) => {
    console.error(error)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
