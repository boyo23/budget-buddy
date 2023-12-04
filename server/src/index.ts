import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import { expenseRouter } from './expense/expense.router'

dotenv.config()

if (!process.env.SERVER_PORT) {
  console.error('Error: Environment variable `SERVER_PORT` does not exist!')
  process.exit(1)
}

const port: number = parseInt(process.env.SERVER_PORT as string, 10)

const app = express()

app.use(express.json())
app.use(cors())
//app.use('/api/category', categoryRouter)
app.use('/api/expense', expenseRouter)
//app.use('/api/goal', categoryRouter)
//app.use('/api/savings', categoryRouter)
//app.use('/api/user', categoryRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
