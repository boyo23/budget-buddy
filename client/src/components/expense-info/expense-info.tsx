import { useContext, useState, useEffect, useMemo, useCallback } from 'react'
import Form from '../form'
import { SavingsContext } from '@/context/savings-context'
import { Dialog, input } from '@material-tailwind/react'
import ExpenseAddForm from './expense-add-form'
import { useForm } from 'react-hook-form'
import ExpenseAddCategory from './expense-add-category'
import { useNavigate, Navigate } from 'react-router-dom'

type Expense = {
  price: number
  quantity: number
  date: Date
  paymentMethod: string
  categoryId: string
  userId: string
}

export default function ExpenseInfo() {
  const [expenseClicked, setExpenseClicked] = useState<boolean>(false)
  const [expenseBody, setExpenseBody] = useState<Expense>({
    price: 0,
    quantity: 0,
    date: new Date(),
    paymentMethod: "",
    categoryId: "",
    userId: "",
  })
  const [tableData, setTableData] = useState({})
  const ctx = useContext(SavingsContext)
  const navigate = useNavigate()

  const addExpenseHandler = () => {
    console.log(expenseClicked)
    setExpenseClicked(!expenseClicked)
  }

  // const API_ADDEXPENSE = async (data) => {
  //   const url = "https://localhost:3000/api/expense"

  //   try {
  //     await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(data)
  //     })
  //   } catch (err: any) {
  //     console.log(err)
  //   }
  // }

  const { register, handleSubmit, watch } = useForm()

  // console.log(watch())

  // useEffect(() => {
  //   setTableData(ctx.userInfo.expenses)
  //   return () => {
  //     // navigate("/login")
  //     navigate("/home")
  //   }
  // }, [ctx.addExpenseFormIsClicked])

  // useEffect(() => {
  //   setTableData(ctx.userInfo.expenses)
  // }, [ctx.addExpenseFormIsClicked])

  // Inside your component
  const fetchUserInfo = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${ctx.token}`,
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      ctx.setUserInfo(json);
      setTableData(json); // Assuming setTableData is a state updater function
      console.log(tableData)
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }, [ctx.token, expenseClicked]); // Make sure to include all dependencies

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  // Note: The dependencies array in useEffect should include fetchUserInfo to avoid stale closures.


  // console.log(tableData)

  return (
    <div className="flex w-full flex-col rounded-md bg-white dark:bg-darkPrimary ">
      <h1 className="p-4 text-center text-4xl font-bold dark:text-contrast shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] dark:shadow-[rgba(243,53,121,1)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
">INFORMATION</h1>
      <hr className="w-full border-gray-400 dark:border-gray-700" />

      <div className="flex flex-grow flex-col p-6 overflow-y-scroll max-h-96">
        <table className="w-full table-auto text-left">
          <thead className=''>
            <tr className='text-2xl dark:text-darkWhite'>
              <th className='border-b border-b-gray-300 pb-4 flex-grow'>Expense</th>
              <th className='border-b border-b-gray-300 pb-4 flex-grow'>Date added</th>
              <th className='border-b border-b-gray-300 pb-4 flex-grow'>Price</th>
            </tr>
          </thead>
          <tbody className='text-xl'>
            {tableData?.expenses?.map((item: any) => (
              <tr className='dark:text-darkText' key={item?.id}>
                <td className='border-b border-gray-300 py-2'>{item?.name}</td>
                <td className='border-b border-gray-300 py-2'>{`${new Date(item?.date).toLocaleDateString()}`}</td>
                <td className='border-b border-gray-300 py-2 dark:text-green-400'>{item?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 mt-auto flex flex-col gap-4">

        <button onClick={ctx.addCategoryHandler} className="w-full rounded-md bg-contrast p-2 text-3xl text-white dark:bg-transparent dark:border dark:border-gray-700 dark:text-contrast dark:hover:border-gray-500">
          Add a new category
        </button>

        <button onClick={addExpenseHandler} className="w-full rounded-md bg-contrast p-2 text-3xl text-white dark:bg-transparent dark:border dark:border-gray-700 dark:text-contrast dark:hover:border-gray-500">
          Add expense
        </button>

      </div>

      <Dialog className="font-" open={ctx.categoryClicked} handler={ctx.setCategoryClicked}>
        <ExpenseAddCategory close={() => ctx.setCategoryClicked(false)} />
      </Dialog>
      <Dialog className='font-' open={expenseClicked} handler={addExpenseHandler}>
        {/* @ts-ignore */}
        <ExpenseAddForm buttonAction={fetchUserInfo} close={() => setExpenseClicked(!expenseClicked)} />
      </Dialog>
    </div>
  )
}
