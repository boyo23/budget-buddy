import { useState, useEffect } from 'react'

type DataType = {
  id: number
  expense: string
  category: string
  paymentMethod: string
  amount: number
  date: string
}

const sampleData: DataType[] = [
  { id: 1, expense: 'This is Detail 1', category: 'Food', paymentMethod: 'GCash', amount: 1000, date: '10/10/2023' },
  {
    id: 2,
    expense: 'This is Detail 2',
    category: 'Transportation',
    paymentMethod: 'Credit Card',
    amount: 100,
    date: '10/10/2023',
  },
  { id: 3, expense: 'This is Detail 3', category: 'Tuition', paymentMethod: 'Cash', amount: 1000, date: '10/10/2023' },
  {
    id: 4,
    expense: 'This is Detail 4',
    category: 'Food',
    paymentMethod: 'Debit Card',
    amount: 1000,
    date: '10/10/2023',
  },
  { id: 1, expense: 'This is Detail 1', category: 'Food', paymentMethod: 'GCash', amount: 1000, date: '10/10/2023' },
  {
    id: 2,
    expense: 'This is Detail 2',
    category: 'Transportation',
    paymentMethod: 'Credit Card',
    amount: 100,
    date: '10/10/2023',
  },
  { id: 3, expense: 'This is Detail 3', category: 'Tuition', paymentMethod: 'Cash', amount: 1000, date: '10/10/2023' },
  {
    id: 4,
    expense: 'This is Detail 4',
    category: 'Food',
    paymentMethod: 'Debit Card',
    amount: 1000,
    date: '10/10/2023',
  },
  { id: 1, expense: 'This is Detail 1', category: 'Food', paymentMethod: 'GCash', amount: 1000, date: '10/10/2023' },
  {
    id: 2,
    expense: 'This is Detail 2',
    category: 'Transportation',
    paymentMethod: 'Credit Card',
    amount: 100,
    date: '10/10/2023',
  },
  { id: 3, expense: 'This is Detail 3', category: 'Tuition', paymentMethod: 'Cash', amount: 1000, date: '10/10/2023' },
  {
    id: 4,
    expense: 'This is Detail 4',
    category: 'Food',
    paymentMethod: 'Debit Card',
    amount: 1000,
    date: '10/10/2023',
  },
  { id: 1, expense: 'This is Detail 1', category: 'Food', paymentMethod: 'GCash', amount: 1000, date: '10/10/2023' },
  {
    id: 2,
    expense: 'This is Detail 2',
    category: 'Transportation',
    paymentMethod: 'Credit Card',
    amount: 100,
    date: '10/10/2023',
  },
  { id: 3, expense: 'This is Detail 3', category: 'Tuition', paymentMethod: 'Cash', amount: 1000, date: '10/10/2023' },
  {
    id: 4,
    expense: 'This is Detail 4',
    category: 'Food',
    paymentMethod: 'Debit Card',
    amount: 1000,
    date: '10/10/2023',
  },
]

export default function ExpenseOverview(props: any) {
  const [data, setData] = useState<DataType[]>(sampleData)
  const [monthName, setMonthName] = useState('')

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

  return (
    <div className="max-h-[700px] overflow-y-auto scroll-smooth rounded-md">
      <div className="flex">
        <div className="w-full bg-white dark:bg-darkPrimary">
          <h1 className="my-4 text-center text-5xl font-bold text-primary dark:text-contrast">{monthName}</h1>
          <table className="w-full border border-gray-400">
            <thead className="bg-contrast text-3xl text-white dark:bg-primary">
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
              {data.map((item) => (
                <tr key={item.id} className="text-xl text-black dark:text-darkText">
                  <td className="border border-gray-400 p-2 text-center">
                    <p>{item.expense}</p>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.category}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.paymentMethod}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.amount}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <p>{item.date}</p>
                  </td>
                  <td className="flex gap-2 border border-gray-400 p-2 text-center">
                    <button className=" flex w-3/6 items-center justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast">
                      Edit
                    </button>
                    <button className=" flex flex-grow justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
