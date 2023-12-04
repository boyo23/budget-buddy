import { useState } from 'react'

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
]

export default function ExpenseOverview() {
  const [data, setData] = useState<DataType[]>(sampleData)

  return (
    <div className="max-h-[520px] overflow-y-auto scroll-smooth p-6">
      <div className="flex">
        <div className="w-full bg-white dark:bg-darkPrimary">
          <table className="w-full border border-gray-400 dark:border-gray-700">
            <thead className="bg-contrast dark:bg-primary text-3xl text-white">
              <tr className="w-auto dark:text-darkWhite">
                <th className="w-[20%] border-collapse p-2">Expense</th>
                <th className="w-[15%] border-collapse p-2">Category</th>
                <th className="w-[20%] border-collapse p-2">Payment method</th>
                <th className="w-[15%] border-collapse p-2">Amount</th>
                <th className="w-[15%] border-collapse p-2">Date added</th>
                <th className="w-[15%] border-collapse p-2">Action</th>
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
                    <button className=" flex w-3/6 items-center justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:text-contrast dark:border-gray-700 dark:border dark:hover:border-gray-500">
                      Edit
                    </button>
                    <button className=" flex flex-grow rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:text-contrast dark:border-gray-700 dark:border dark:hover:border-gray-500">
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
