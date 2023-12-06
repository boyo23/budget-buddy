import ExpenseHeading from './expense-heading'
import ExpenseCandlesticks from './expense-candlesticks'

export default function ExpenseSummary(props: any) {
  return (
    <div className={`w-full rounded-md bg-white dark:bg-darkPrimary h-full flex flex-col gap-8 ${props.className}`}>
      <ExpenseHeading />
      <div className={`flex justify-center text-black`}>
        <ExpenseCandlesticks />
      </div>
    </div>
  )
}
