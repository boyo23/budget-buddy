import { useState, useContext } from 'react'
import { StickyExpenseNav } from '../expense-summary/expense-edit-nav'
import { StickyOverviewNav } from './expense-overview-nav'
import { SavingsContext } from '@/context/savings-context'


export default function ExpenseOverview() {
  // const [data, setData] = useState<DataType[]>(sampleData)
  const [editIsClicked, setEditIsClicked] = useState<boolean>(false)
  const ctx = useContext(SavingsContext)
  
  const editClickHandler = () => {
    setEditIsClicked(!editIsClicked)
  }
  // console.log(ctx.userInfo)

  return (
    <div className="max-h-[520px] overflow-y-auto scroll-smooth ">
      <div className="flex">
        <div className="w-full bg-white dark:bg-darkPrimary p-4">
          
        {editIsClicked && <StickyOverviewNav action={() => editClickHandler()}/>}

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
              {ctx?.userInfo?.expenses?.map((item) => (
                <tr key={item.id} className="text-xl text-black dark:text-darkText">
                  <td className="border border-gray-400 p-2 text-center">
                    <p>{item.name}</p>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item?.categoryId}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.paymentMethod}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.price}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <p>{new Date(item?.date).toLocaleDateString()}</p>
                  </td>
                  <td className="flex flex-col gap-2 border-b border-b-gray-400  p-2 text-center">
                    <button onClick={editClickHandler} className=" flex w-3/6 items-center justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:text-contrast dark:border-gray-700 dark:border dark:hover:border-gray-500">
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
