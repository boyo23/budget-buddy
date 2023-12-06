import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import { categoryRouter } from './category/category.router'
import { expenseRouter } from './expense/expense.router'
import { userRouter } from './user/user.router'

dotenv.config()

if (!process.env.SERVER_PORT) {
  console.error('Error: Environment variable `SERVER_PORT` does not exist!')
  process.exit(1)
}

const port: number = parseInt(process.env.SERVER_PORT as string, 10)
const app = express()

app.use(express.json())
app.use(cors({ credentials: true }))

app.use('/category', categoryRouter)
app.use('/expense', expenseRouter)
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
