import { useState } from 'react'
import { Collapse } from '@material-tailwind/react'

import ExpenseInfo from '@/components/expense-info/expense-info'
import SavingsProgress from '@/components/savings-progress/savings-progress'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'

import ExpenseCarousel from '@/components/expense-carousel/expense-carousel'
// import Form from '@/components/form'
import FormHeading from '@/components/forms/form-heading'
import ExpenseForm from '@/components/forms/form'
import FormSelect from '@/components/forms/form-select'
import FormSelectOption from '@/components/forms/form-select-option'
import FormFieldsContainer from '@/components/forms/form-container'
import Form from '@/components/forms/form'
import FormText from '@/components/forms/form-text'
import FormNumber from '@/components/forms/form-number'
import FormDate from '@/components/forms/form-date'
import FormButtonContainer from '@/components/forms/form-button-container'
import FormButton from '@/components/forms/form-button'



export default function Home() {
  const [openExpenses, setOpenExpenses] = useState(true)
  const [openSavings, setOpenSavings] = useState(true)

  const toggleOpenExpenses = () => setOpenExpenses((cur) => !cur)
  const toggleOpenSavings = () => setOpenSavings((cur) => !cur)

  return (
    <div className="dark:bg-primary min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col mt-4 justify-start">
        <div className="w-full px-4 grid grid-cols-5 grid-rows-1 gap-4">
          <div className="col-span-5 col-start-1">
            <div className="cursor-pointer rounded-md bg-contrast dark:bg-darkPrimary">
              <h1 onClick={toggleOpenExpenses} className="flex justify-center p-4 text-5xl font-bold text-white dark:text-contrast">
                EXPENSES
              </h1>
            </div>
            <Collapse open={openExpenses} className="rounded-md">
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
                {/* <SavingsProgress /> */}
              </div>
            </Collapse>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
