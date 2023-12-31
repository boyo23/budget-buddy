import { SavingsContext } from '@/context/savings-context'
import { useState, useContext } from 'react'
import { Dialog } from '@material-tailwind/react'
import SavingsTable from '@/components/savings-progress/savings-table'

// type SampleData = {
//   goalName: string
//   dateAdded: string
//   targetDate: string
//   savingsBalance: number
//   savingsGoal: number
// }

export default function SavingsCard({ goalName, dateAdded, targetDate, savingsBalance, savingsGoal, key, goalId, savingsArray }) {
  // console.log(savingsArray)
  const [progressIsClicked, setProgressIsClicked] = useState(false)
  const [cardIsClicked, setCardIsClicked] = useState(false)
  const ctx = useContext(SavingsContext)
  // console.log(abc)
  const progressClickHandler = () => {
    setProgressIsClicked(!progressIsClicked)
    // console.log(progressIsClicked)
  }

  const cardClickHandler = () => {
    setCardIsClicked(!cardIsClicked)
    // console.log(cardIsClicked)
  }

  const totalAmount = savingsArray.reduce((sum, savings) => sum + savings.amount, 0);
  const percentage = ((totalAmount / savingsGoal) * 100).toFixed(1)


  return (
    <div style={{ width: '350px' }} className="m-4 cursor-pointer p-2 transition-all duration-100 hover:scale-105 ">
      <Dialog size="xl" open={cardIsClicked} handler={cardClickHandler}>
        {/* @ts-ignore */}
        <SavingsTable savingsArray={savingsArray} goalId={goalId} goalName={goalName} percentage={percentage} />
      </Dialog>
      <div className="rounded-md border border-gray-400 p-6 dark:border-gray-700 dark:bg-darkCard ">
        <h1 onClick={cardClickHandler} className="mb-4 flex justify-center text-2xl  dark:text-contrast text-primary">
          {goalName}
        </h1>

        <div className="flex justify-between text-xl dark:text-darkText text-blue-gray-500">
          <h1>Date added</h1>
          <h1 className="font-bold text-green-500 ">{new Date(dateAdded).toLocaleDateString()}</h1>
        </div>

        <div className="flex justify-between text-xl dark:text-darkText text-blue-gray-500">
          <h1>Target date</h1>
          <h1 className="font-bold text-green-500">{new Date(targetDate).toLocaleDateString()}</h1>
        </div>

        <div className="relative mt-4 w-full dark:bg-darkWhite">
          <div className="border-slate-500 flex h-10 w-full overflow-hidden border border-gray-400 dark:border-gray-700">
            <h1
              onClick={progressClickHandler}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer whitespace-nowrap text-xl text-primary transition-all hover:scale-110 hover:font-bold"
            >
              {/* {percentage} */}
              {`${progressIsClicked
                  ? `${percentage}%`
                  : `${totalAmount?.toLocaleString()} / ${savingsGoal?.toLocaleString()}`
                }`}
            </h1>

            <div className={`bg-contrast`} style={{ width: `${percentage}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
