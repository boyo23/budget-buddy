import { useState, useEffect, useContext } from 'react'
import { StickyExpenseNav } from '../expense-summary/expense-edit-nav'
import { StickyFilterNav } from '../expense-summary/expense-filter-nav'
import FormButton from '../forms/form-button'
import {
  Select,
  Option
} from '@material-tailwind/react'
import { SavingsContext } from '@/context/savings-context'



export default function ExpenseOverview(props: any) {
  const [editIsClicked, setEditIsClicked] = useState<boolean>(false)
  const [filterIsClicked, setFilterIsClicked] = useState<boolean>(false)
  const [monthName, setMonthName] = useState('')
  const ctx = useContext(SavingsContext)

  useEffect(() => {
    switch (props.monthClicked) {
      case 'JAN':
        setMonthName('JANUARY')
        break
      case 'FEB':
        setMonthName('FEBRUARY')
        break
      case 'MAR':
        setMonthName('MARCH')
        break
      case 'APR':
        setMonthName('APRIL')
        break
      case 'MAY':
        setMonthName('MAY')
        break
      case 'JUN':
        setMonthName('JUNE')
        break
      case 'JUL':
        setMonthName('JULY')
        break
      case 'AUG':
        setMonthName('AUGUST')
        break
      case 'SEP':
        setMonthName('SEPTEMBER')
        break
      case 'OCT':
        setMonthName('OCTOBER')
        break
      case 'NOV':
        setMonthName('NOVEMBER')
        break
      case 'DEC':
        setMonthName('DECEMBER')
        break
      default:
        setMonthName('INVALID MONTH')
    }
  }, [props.monthClicked])

  const editClickHandler = () => {
    setEditIsClicked(!editIsClicked)
  }
  const filterClickHandler = () => {
    setFilterIsClicked(!filterIsClicked)
  }

  return (
    <div className="max-h-[700px] overflow-y-auto scroll-smooth rounded-md dark:bg-darkPrimary">
      <div className="flex flex-col items-center relative">

        <h1 className="my-4 text-center text-5xl font-bold text-primary dark:text-contrast">{monthName}</h1>

        <div className="flex justify-end w-full absolute">
          <div className='p-4 w-3/12'>
            <Select label='Filter by category' className='text-xl' size='lg'>
              <Option value="1" className='text-xl'>Food</Option>
              <Option value="2" className='text-xl'>Transportation</Option>
            </Select>
          </div>
        </div>

        {editIsClicked && <StickyExpenseNav action={() => editClickHandler()} />}
        {filterIsClicked && <StickyFilterNav action={() => filterClickHandler()} />}

        <table className="w-full border border-gray-400">
          <thead className="bg-contrast text-2xl text-white dark:bg-primary">
            <tr className="dark:text-darkWhite">
              <th className="border-collapse p-2 ">Expense</th>
              <th className="border-collapse p-2 ">Category</th>
              <th className="border-collapse p-2 ">Payment method</th>
              <th className="border-collapse p-2 ">Amount</th>
              <th className="border-collapse p-2 ">Date added</th>
              <th className="border-collapse p-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {ctx?.userInfo?.expenses?.map((item) => (
              <tr key={item?.id} className="text-xl text-black dark:text-darkText">
                <td className="border border-gray-400 p-2 text-center">
                  <p>{item?.name}</p>
                </td>
                <td className="border border-gray-400 p-2 text-center">
                  <h1>{item?.categoryName}</h1>
                </td>
                <td className="border border-gray-400 p-2 text-center">
                  <h1>{item?.paymentMethod}</h1>
                </td>
                <td className="border border-gray-400 p-2 text-center">
                  <h1>{item?.price}</h1>
                </td>
                <td className="border border-gray-400 p-2 text-center">
                  <p>{item?.date}</p>
                </td>
                <td className="flex gap-2 border border-gray-400 p-2 text-center">
                  <button onClick={editClickHandler} className=" flex w-3/6 items-center justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300 text-xl">
                    Edit
                  </button>
                  <button className=" flex flex-grow justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300 text-xl">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
