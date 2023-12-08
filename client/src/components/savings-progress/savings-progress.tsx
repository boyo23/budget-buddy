import { useState, useEffect, Suspense, lazy } from 'react'
import { Dialog } from '@material-tailwind/react'
import { SavingsContext } from '@/context/savings-context'
import { useForm } from 'react-hook-form'
import Form from '../forms/form'
import FormHeading from '../forms/form-heading'
import FormNumber from '../forms/form-number'
import FormButtonContainer from '../forms/form-button-container'
import FormButton from '../forms/form-button'
import FormFieldsContainer from '../forms/form-container'
import FormText from '../forms/form-text'
import FormDate from '../forms/form-date'

export default function SavingsProgress() {
  const [goalIsClicked, setGoalIsClicked] = useState(false)
  const { register, handleSubmit, watch } = useForm()

  // useEffect(() => {
  //   console.log(goalIsClicked)
  // }, [goalIsClicked])

  const goalClickHandler = () => {
    setGoalIsClicked(!goalIsClicked)
  }

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
      <div className={`flex flex-col overflow-x-auto rounded-md bg-white dark:bg-darkPrimary`}>
        <div className="">
          <div className="relative flex justify-center">
            <h1 className="p-4 text-4xl font-bold text-primary dark:text-contrast">PROGRESS</h1>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 transform cursor-pointer">
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
          <hr className="w-full border-gray-400 dark:border-gray-700" />
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
              <Form handleSubmit={handleSubmit} key="88">
                <FormHeading inputHeading="Add a goal" />
                <FormFieldsContainer>
                  {/* @ts-ignore */}
                  <FormText register={register} name="name" inputName="Name" />
                  <FormNumber register={register} name="targetSavings" inputName="Target savings" />
                  <FormDate register={register} name="targetDate" inputName="Date" />
                  <FormButtonContainer>
                    <FormButton buttonName="Update" />
                    <FormButton type="button" buttonName="Close" buttonAction={goalClickHandler} />
                  </FormButtonContainer>
                </FormFieldsContainer>
              </Form>
            </Dialog>
          }
        </div>
      </div>
    </div>
  )
}
