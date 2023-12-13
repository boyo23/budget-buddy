import { useState, useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Collapse, Tooltip } from '@material-tailwind/react'

import ExpenseInfo from '@/components/expense-info/expense-info'
import SavingsProgress from '@/components/savings-progress/savings-progress'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SavingsContext } from '@/context/savings-context'

import ExpenseCarousel from '@/components/expense-carousel/expense-carousel'
// import Form from '@/components/form'



export default function Home() {
  const [openExpenses, setOpenExpenses] = useState(true)
  const [openSavings, setOpenSavings] = useState(true)
  const navigate = useNavigate()

  const toggleOpenExpenses = () => setOpenExpenses((cur) => !cur)
  const toggleOpenSavings = () => setOpenSavings((cur) => !cur)
  const ctx = useContext(SavingsContext)

  if (!localStorage.getItem("token")) {
    console.log(ctx.token)
    return <Navigate to="/protectedRoute" replace />;
  }

  // @ts-ignore
  useEffect(() => {
    fetch('http://localhost:3000/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${ctx.token}`,
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).then((json) => {
      // console.log(json)
      ctx.setUserInfo(json)

      localStorage.setItem("userInfo", JSON.stringify(json));
    }).catch((error) => {
      console.error('Error during fetch:', error);
    }).finally(() => {
      // Retrieve and parse user info from localStorage
      const storedUserInfo = localStorage.getItem("userInfo");

      // Parse the JSON string if it exists
      const parsedUserInfo = storedUserInfo && JSON.parse(storedUserInfo);
      // console.log(parsedUserInfo);
    });
  }, [ctx.userInfo])

  return (
    <div className="dark:bg-primary min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col mt-4 justify-start">
        <div className="w-auto px-4 grid grid-cols-5 grid-rows-1 gap-4">
          <div className="col-span-5 col-start-1">
            <div className="cursor-pointer rounded-md bg-contrast dark:bg-darkPrimary">
              <h1 onClick={toggleOpenExpenses} className="flex justify-center p-4 text-5xl font-bold text-white dark:text-contrast">
                EXPENSES
              </h1>
            </div>
            <Collapse open={openExpenses} className="rounded-md">
              <div className="mt-4 flex gap-4">
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

      <Footer />
    </div>
  )
}
