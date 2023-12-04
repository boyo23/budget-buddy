import { useState } from 'react'
import { Collapse } from '@material-tailwind/react'

import ExpenseInfo from '@/components/expense-info/expense-info'
import SavingsProgress from '@/components/savings-progress/savings-progress'
import SavingsContextProvider from '@/context/savings-context'
import Navbar from '@/components/navbar'

import ExpenseCarousel from '@/components/expense-carousel/expense-carousel'

export default function Home() {
  const [openExpenses, setOpenExpenses] = useState(true)
  const [openSavings, setOpenSavings] = useState(true)

  const toggleOpenExpenses = () => setOpenExpenses((cur) => !cur)
  const toggleOpenSavings = () => setOpenSavings((cur) => !cur)

  return (
    <SavingsContextProvider>
      <div className="dark:bg-primary">
        <Navbar />

        <div className="mt-4 flex justify-center">
          <div className="w-6/6 mx-4 grid grid-cols-5 grid-rows-1 gap-4">
            <div className="col-span-5 col-start-1">
              <div className="cursor-pointer rounded-md bg-contrast dark:bg-darkPrimary ">
                <h1 onClick={toggleOpenExpenses} className="flex justify-center p-4 text-5xl font-bold text-white dark:text-contrast">
                  EXPENSES
                </h1>
              </div>
              <Collapse open={openExpenses} className=" rounded-md">
                <div className="mt-4 flex gap-4">
                  {/* <ExpenseSummary /> */}
                  <ExpenseCarousel />
                  <ExpenseInfo />
                </div>
              </Collapse>
            </div>

            <div className="col-span-5 row-start-2 h-fit">
              <div onClick={toggleOpenSavings} className="cursor-pointer rounded-md bg-contrast dark:bg-darkPrimary">
                <h1 className="flex justify-center rounded-md p-4 text-5xl font-bold text-white dark:text-contrast">SAVINGS</h1>
              </div>

              <Collapse open={openSavings}>
                <div className="mt-4 flex">
                  <SavingsProgress />
                </div>
              </Collapse>
            </div>
          </div>
        </div>

        <footer className="mt-6 bg-white dark:bg-darkPrimary">
          <div className="flex justify-center p-6 text-3xl">
            <h1 className="flex h-32 items-center text-5xl font-bold dark:text-contrast">FOOTER</h1>
          </div>
        </footer>
      </div>
    </SavingsContextProvider>
  )
}
