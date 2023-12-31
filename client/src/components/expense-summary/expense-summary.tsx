import ExpenseHeading from './expense-heading'
import ExpenseCandlesticks from './expense-candlesticks'

export default function ExpenseSummary(props: any) {
  return (
    <div className={`w-full rounded-md bg-white dark:bg-darkPrimary flex flex-col gap-5  ${props.className}`}>
      <ExpenseHeading />
      <div className={`flex justify-center text-black p-6`}>
        <ExpenseCandlesticks />
      </div>
    </div>
  )
}
