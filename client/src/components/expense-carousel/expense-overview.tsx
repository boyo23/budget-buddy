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

  const handleDelete = async (data: any) => {
    console.log(data);
    try {
      const response = await fetch('http://localhost:3000/expense/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${ctx.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: data}), // Assuming your server expects an object with a key 'data'
      });

      console.log(response);

      if (!response.ok) {
        const json = await response.json();
        console.log(json.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <div className="max-h-[520px] overflow-y-auto scroll-smooth ">
      <div className="flex">
        <div className="w-full bg-white dark:bg-darkPrimary p-4">

          {editIsClicked && <StickyOverviewNav action={() => editClickHandler()} />}

          <table className="w-full border border-gray-400 dark:border-gray-700">
            <thead className="bg-contrast dark:bg-primary text-3xl text-white">
              <tr className="w-auto dark:text-darkWhite">
                <th className="w-[20%] border-collapse p-2">Expense</th>
                <th className="w-[15%] border-collapse p-2">Category</th>
                <th className="w-[20%] border-collapse p-2">Payment method</th>
                <th className="w-[15%] border-collapse p-2">Amount</th>
                <th className="w-[15%] border-collapse p-2">Quantity</th>
                <th className="w-[15%] border-collapse p-2">Date added</th>
                <th className="w-[15%] border-collapse p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {ctx?.userInfo?.expenses?.length <= 0 && <h1 className='text-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-2xl whitespace-nowrap'></h1>}
              {ctx?.userInfo?.expenses?.map((item) => (
                <tr key={item.id} className="text-xl text-black dark:text-darkText">
                  <td className="border border-gray-400 p-2 text-center">
                    <p>{item.name}</p>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item?.categoryName}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.paymentMethod}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.price}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.quantity}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <p>{new Date(item?.date).toLocaleDateString()}</p>
                  </td>
                  <td className="flex gap-2 border-b border-b-gray-400  p-2 text-center">
                    {/* <button onClick={editClickHandler} className=" flex w-3/6 items-center justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:text-contrast dark:border-gray-700 dark:border dark:hover:border-gray-500">
                      Edit
                    </button> */}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className=" flex flex-grow rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:text-contrast dark:border-gray-700 dark:border dark:hover:border-gray-500">
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
