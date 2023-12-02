import { useState } from 'react'
type DataType = {
  id: number
  amount: number
  date: Date
}

const sampleData: DataType[] = [
  {
    id: 1,
    amount: 1222,
    date: new Date('2023-10-10'),
  },
  {
    id: 2,
    amount: 132,
    date: new Date('2023-10-10'),
  },
]

export default function SavingsTable(props: any) {
  const [data, setData] = useState<DataType[]>(sampleData)
  const [open, setOpen] = useState<boolean>(false)
  const [editId, setEditId] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null)

  const deleteItem = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id))
  }

  const handleEditClick = (id: number) => {
    setEditId(id)
    setSelectedItem(data.find((item) => item.id === id) || null)
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
    setEditId(null)
    setSelectedItem(null)
  }

  const handleSave = (updatedData: DataType) => {
    if (selectedItem) {
      const newData = data.map((item) => (item.id === selectedItem.id ? { ...item, ...updatedData } : item))
      console.log(newData)
      setData(newData)

      console.log('sad', data)
      handleCloseModal()
    }
  }

  return (
    <div className="max-h-[700px] overflow-y-auto scroll-smooth rounded-md">
      <div className="flex">
        <div className="w-full bg-white">
          <h1 className="my-4 text-center text-5xl font-bold text-primary">{props.goalName}</h1>
          <table className="w-full border border-gray-400">
            <thead className="bg-contrast text-3xl text-white">
              <tr className="">
                <th className="border-collapse p-2 ">Amount</th>
                <th className="border-collapse p-2 ">Date added</th>
                <th className="border-collapse p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="text-xl text-black ">
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.amount}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <p>{item.date.toLocaleDateString()}</p>
                  </td>
                  <td className="flex gap-2 border border-gray-400 p-2 text-center">
                    <button className=" flex w-3/6 items-center justify-center rounded-md bg-contrast p-2 text-center text-white">
                      Edit
                    </button>
                    <button className=" flex flex-grow justify-center rounded-md bg-contrast p-2 text-center text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="relative w-full p-4">
            <div className="flex h-10 w-full overflow-hidden border border-gray-400 border-slate-500">
              <h1
                style={{}}
                // onClick={progressClickHandler}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer whitespace-nowrap text-xl text-primary transition-all hover:scale-110 hover:font-bold"
              >
                {`${props.percentage}%`}
              </h1>
              <div className={`bg-contrast`} style={{ width: `${props.percentage}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
