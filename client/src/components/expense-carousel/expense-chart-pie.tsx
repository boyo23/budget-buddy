import { useContext } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { SavingsContext } from '@/context/savings-context'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function ExpenseChartPie() {
  const ctx = useContext(SavingsContext)

  const data = {
    labels: ["Food", "General"],
    datasets: [
      {
        label: 'Overall expenses',
        data: [1,1,1,1,1],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: `${ctx.theme === "light" ? "black" : "white"}`,
        borderWidth: 0.5,
      },
    ],
  }

  return (
    <div className="relative m-auto h-fit w-[25vw]">
      <Pie updateMode="resize" data={data} />
    </div>
  )
}
