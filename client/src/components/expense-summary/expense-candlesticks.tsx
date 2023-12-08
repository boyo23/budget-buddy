import CandleStick from './candle-stick'
import { useContext } from 'react'
import { SavingsContext } from '@/context/savings-context'

export default function ExpenseCandlesticks() {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const ctx = useContext(SavingsContext)

  return (
    <div className=" flex border-gray-400 p-3 ">
      <div className="flex gap-3">
        {months.map((month, index) => (
          <CandleStick key={index} month={month} height={"50%"}/>
        ))}
      </div>
    </div>
  )
}
