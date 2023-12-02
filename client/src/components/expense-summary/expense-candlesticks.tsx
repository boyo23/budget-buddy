import CandleStick from './candle-stick'

export default function ExpenseCandlesticks() {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  return (
    <div className=" flex border-gray-400 p-3 ">
      <div className="flex gap-3">
        {months.map((month, index) => (
          <CandleStick key={index} month={month} />
        ))}
      </div>
    </div>
  )
}
