import { useState, useContext } from 'react';
import { Dialog } from '@material-tailwind/react';
import ExpenseMonthTable from '../expense-carousel/expense-month-table';
import { SavingsContext } from '@/context/savings-context';

export default function CandleStick({ month, height, expenses }) {
  const [monthIsClicked, setMonthIsClicked] = useState(false);
  const ctx = useContext(SavingsContext);

  const monthClickHandler = () => {
    setMonthIsClicked(!monthIsClicked);
  };

  // Calculate the total amount of expenses for the month
  const totalExpenseAmount = expenses.reduce((acc, expense) => acc + expense.price * expense.quantity, 0);

  // Calculate the bar chart height based on the total amount and threshold
  const barChartHeight = (totalExpenseAmount / ctx?.userInfo?.threshold) * 100;

  return (
    <div className="flex w-min flex-col p-2">
      <Dialog className="font-family" size="xl" open={monthIsClicked} handler={monthClickHandler}>
        {/* @ts-ignore */}
        <ExpenseMonthTable monthClicked={month} />
      </Dialog>

      <div
        onClick={monthClickHandler}
        className="relative flex h-[400px] w-14 cursor-pointer flex-col-reverse overflow-hidden border border-gray-400 hover:border-1 hover:border-black dark:border dark:border-gray-400 dark:bg-darkWhite dark:hover:border-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
      >
        <div className={`bg-contrast`} style={{ height: `${barChartHeight}%` }} />
      </div>
      <h1 className="mt-2 text-center text-xl dark:text-darkText">{month}</h1>
    </div>
  );
}
