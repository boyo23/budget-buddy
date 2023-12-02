import ExpenseChartPie from './expense-chart-pie'

export default function ExpenseStatistics(props: any) {
  return (
    <div className={`flex w-full flex-col rounded-md bg-white ${props.className}`}>
      <div className="">
        <h1 className="flex justify-center p-4 text-4xl font-bold text-primary">STATISTICS</h1>
        <hr className="w-full border-gray-400" />
      </div>

      <div className={`items-center p-4 text-black`}>
        <ExpenseChartPie />
      </div>
    </div>
  )
}