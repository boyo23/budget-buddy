import CandleStick from './candle-stick';
import { useContext } from 'react';
import { SavingsContext } from '@/context/savings-context';

export default function ExpenseCandlesticks() {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const ctx = useContext(SavingsContext);

  // Assuming ctx?.userInfo?.expenses is an array of expenses
  const expenses = ctx?.userInfo?.expenses || [];

  // Map over the expenses and extract the month from the date
  const expensesByMonth = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).getMonth(); // Assuming the date is a valid date string
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(expense);
    return acc;
  }, {});

  return (
    <div className="flex border-gray-400 p-3">
      <div className="flex gap-3">
        {months.map((month, index) => (
          <CandleStick key={index} month={month} expenses={expensesByMonth[index] || []} height={"50%"} />
        ))}
      </div>
    </div>
  );
}
