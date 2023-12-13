import ExpenseChartPie from './expense-chart-pie'
import { useContext } from 'react'
import { SavingsContext } from '@/context/savings-context'

export default function ExpenseStatistics(props: any) {
  const ctx = useContext(SavingsContext)

  return (
    <div className={` flex w-full flex-col rounded-md bg-white dark:bg-darkPrimary ${props.className}`}>
      <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] dark:shadow-[rgba(243,53,121,1)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
    ">
        <h1 className="flex justify-center p-4 text-4xl font-bold text-primary dark:text-contrast">STATISTICS</h1>
        <hr className="w-full border-gray-400 dark:border-gray-700" />
      </div>

      <div className={`items-center p-4 text-black`}>
        <ExpenseChartPie labels={[ctx?.userInfo?.categories?.name]} pieData={null} />
      </div>
    </div>
  )
}
