import { useState, useEffect } from 'react'
import { Dialog } from '@material-tailwind/react'
import ExpenseMonthTable from '../expense-carousel/expense-month-table'

export default function CandleStick({ month }: { month: string }) {
  const [monthIsClicked, setMonthIsClicked] = useState(false)

  const monthClickHandler = () => {
    setMonthIsClicked(!monthIsClicked)
  }

  useEffect(() => {
    console.log(monthIsClicked)
  }, [monthIsClicked])

  return (
    <div className="flex w-min flex-col p-2">
      <Dialog className="font-family" size="xl" open={monthIsClicked} handler={monthClickHandler}>
        {/* @ts-ignore */}
        <ExpenseMonthTable monthClicked={month} />
      </Dialog>
      <div
        onClick={monthClickHandler}
        className="relative flex h-[400px] w-14 cursor-pointer flex-col-reverse overflow-hidden border border-gray-400 hover:border-2 hover:border-black"
      >
        <div className={`bg-contrast`} style={{ height: `50%` }} />
      </div>
      <h1 className="mt-2 text-center text-xl">{month}</h1>
    </div>
  )
}
