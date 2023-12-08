import { useState, useEffect, useCallback, useContext } from 'react'
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
import SavingsCard from './savings-card'

export default function SavingsProgress() {
  const [goalIsClicked, setGoalIsClicked] = useState(false)
  const { register, handleSubmit, watch } = useForm()
  const ctx = useContext(SavingsContext)

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
  ]
  const handlePost = async (data: any) => {
    try {
      const response = await fetch('http://localhost:3000/goal/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ctx.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log(response)
      console.log(data)
      if (!response.ok) {
        const json = await response.json()
        console.log(json.message)
      }
    } catch(error: any) {
      console.error(error)
    }
  }

  // console.log(ctx.userInfo.goals[1].savings)
  return (
    <div
      className="mb-20 w-full min-h-[240px] max-h-[590px]"
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
            {/* <Suspense fallback={<span className="p-6 text-center text-5xl">Loading...</span>}> */}
              {ctx?.userInfo?.goals?.map((item) => (
                <SavingsCard
                // @ts-ignore
                  savingsArray={item?.savings}
                  goalId={item.id}
                  key={item.id}
                  goalName={item.name}
                  dateAdded={item.addedAt}
                  targetDate={item.targetedAt}
                  savingsBalance={item?.savingsBalance}
                  savingsGoal={item.amount}
                />
              ))}
            {/* </Suspense> */}
          </div>
          {
            <Dialog className="font-" open={goalIsClicked} handler={goalClickHandler}>
              <Form handleSubmit={() => handleSubmit(data => handlePost(data))}>
                <FormHeading inputHeading="Add a goal" />
                <FormFieldsContainer>
                  {/* @ts-ignore */}
                  <FormText register={register} name="name" inputName="Name" />
                  <FormNumber register={register} name="amount" inputName="Target savings" />
                  <FormDate register={register} name="targetedAt" inputName="Date" />
                  <FormButtonContainer>
                    <FormButton buttonName="Add" buttonAction={null} />
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
