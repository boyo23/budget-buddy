import { useContext } from 'react';
import { SavingsContext } from '@/context/savings-context';
import CandleStick from './candle-stick';

export default function ExpenseCandlesticks() {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const ctx = useContext(SavingsContext);

  // Assuming ctx?.userInfo?.expenses is an array of expenses
  const expenses = ctx?.userInfo?.expenses || [];

  // Map over the expenses and extract the month from the date
  const expensesByMonth = months.map((month) => {
    return expenses.filter((expense) => {
      const expenseMonth = new Date(expense.date).toLocaleString('en-US', { month: 'short' }).toUpperCase();
      return expenseMonth === month;
    });
  });

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
