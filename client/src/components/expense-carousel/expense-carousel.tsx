import { Suspense, lazy, useContext } from 'react'
import Carousel from '@material-tailwind/react/components/Carousel'
import ExpenseSummary from '../expense-summary/expense-summary'
import IconButton from '@material-tailwind/react/components/IconButton'
import { SavingsContext } from '@/context/savings-context'
import { Select, Option } from '@material-tailwind/react'

export default function ExpenseCarousel(props: any) {
  const ExpenseStatistics = lazy(() => import('./expense-statistics'))
  const ExpenseOverview = lazy(() => import('./expense-overview'))
  const ctx = useContext(SavingsContext)

  return (
    <div className={`${props.className} flex w-full dark:bg-darkPrimary rounded-md`}>
      <Carousel
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute left-4 top-8 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 26"
              strokeWidth={4}
              stroke={`${ctx.theme === "light" ? "#262C50" : "#48528E"}`}
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute !right-4 top-8 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke={`${ctx.theme === "light" ? "#262C50" : "#48528E"}`}
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </IconButton>
        )}
        className="w-full rounded-md bg-white dark:bg-darkPrimary"
      >
        <ExpenseSummary />

        <Suspense
          fallback={<span className="flex w-full justify-center p-6 text-center text-5xl">Loading statistics...</span>}
        >
          {/* <ExpenseStatistics /> */}
        </Suspense>

        {/* <div className="">
          <Suspense
            fallback={<span className="flex w-full justify-center p-6 text-center text-5xl">Loading overview...</span>}
          >
            <div className='relative'>
              <h1 className="flex justify-center p-4 text-4xl font-bold text-primary dark:text-contrast">OVERVIEW</h1>

              <div className='px-4 w-3/12 absolute top-4 right-20'>
                <Select label='Filter by category' className='text-xl' size='lg'>
                  <Option value="1" className='text-xl'>Food</Option>
                  <Option value="2" className='text-xl'>Transportation</Option>
                </Select>
              </div>

            </div>
            <hr className="flex w-full border-gray-400 dark:border-gray-700" />

            <ExpenseOverview />
          </Suspense>
        </div> */}
      </Carousel>
    </div>
  )
}
