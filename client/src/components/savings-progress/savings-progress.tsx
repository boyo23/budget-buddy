import { useState, useEffect, Suspense, lazy } from 'react'
import Form from '../form'
import { Dialog } from '@material-tailwind/react'

export default function SavingsProgress() {
  const [goalIsClicked, setGoalIsClicked] = useState(false)

  useEffect(() => {
    console.log(goalIsClicked)
  }, [goalIsClicked])

  const goalClickHandler = () => {
    setGoalIsClicked(!goalIsClicked)
  }

  const addGoal = (
    <div className="flex flex-grow ">
      <div className="h-full border-l border-gray-400"></div>
      <Form
        action={goalClickHandler}
        className="h-fit flex-grow"
        heading="ADD GOAL"
        buttonName="Add"
        inputText={['Name', 'Target savings', 'Target date']}
      />
    </div>
  )

  const sampleData = [
    {
      goalName: 'Anniversary fund',
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 1000,
      savingsGoal: 10000,
    },
    {
      goalName: "Xander's Dog",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 2000,
      savingsGoal: 10000,
    },
    {
      goalName: 'German Shepherd',
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 5000,
      savingsGoal: 10000,
    },
    {
      goalName: "Carlo's Penguin",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 7500,
      savingsGoal: 12345,
    },
    {
      goalName: "Yan and Aki's Cookie Shop",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 10000,
      savingsGoal: 10000,
    },
    {
      goalName: "Dianne's Eatery",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 7500,
      savingsGoal: 10000,
    },
    {
      goalName: "Dianne's Nissan GTR",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 5000,
      savingsGoal: 12000000,
    },
    {
      goalName: "Carlo's Penguin",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 7500,
      savingsGoal: 12345,
    },
    {
      goalName: "Yan and Aki's Cookie Shop",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 10000,
      savingsGoal: 10000,
    },
    {
      goalName: "Dianne's Eatery",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 7500,
      savingsGoal: 10000,
    },
    {
      goalName: "Dianne's Nissan GTR",
      dateAdded: '11/11/2088',
      targetDate: '11/11/2099',
      savingsBalance: 5000,
      savingsGoal: 12000000,
    },
  ]

  const SavingsCard = lazy(() => import('./savings-card'))

  return (
    <div
      style={{
        minHeight: '240px',
        maxHeight: '590px',
      }}
      className="mb-20 w-full"
    >
      <div className={`flex flex-col overflow-x-auto rounded-md bg-white`}>
        <div className="">
          <div className="relative flex justify-center">
            <h1 className="p-4 text-4xl font-bold text-primary">PROGRESS</h1>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 transform">
              <svg
                onClick={goalClickHandler}
                className="rounded-full p-2 transition-all duration-200 hover:scale-105"
                style={{ fill: '#fff', backgroundColor: 'f33579' }}
                xmlns="http://www.w3.org/2000/svg"
                height="3em"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
          </div>
          <hr className="w-full border-gray-400" />
        </div>

        {/* Progress Card */}
        <div style={{ maxHeight: '590px' }} className="flex h-full">
          <div className={`flex w-full flex-wrap justify-evenly overflow-x-auto`}>
            <Suspense fallback={<span className="p-6 text-center text-5xl">Loading...</span>}>
              {sampleData.map((item, index) => (
                <SavingsCard
                  key={index}
                  goalName={item.goalName}
                  dateAdded={item.dateAdded}
                  targetDate={item.targetDate}
                  savingsBalance={item.savingsBalance}
                  savingsGoal={item.savingsGoal}
                />
              ))}
            </Suspense>
          </div>
          {
            <Dialog className="font-" open={goalIsClicked} handler={goalClickHandler}>
              {addGoal}
            </Dialog>
          }
          {/* {goalIsClicked ? addGoal : null} */}
        </div>
      </div>
    </div>
  )
}
