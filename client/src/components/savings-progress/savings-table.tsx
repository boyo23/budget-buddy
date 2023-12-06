import { useState } from 'react'
type DataType = {
  id: number
  amount: number
  date: Date
}
import StickyAddNav from './savings-add-nav'
import StickySavingsNav from './savings-edit-nav'

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
  const [editIsClicked, setEditIsClicked] = useState<boolean>(false)
  const [addNewSavingsClicked, setAddNewSavingsClicked] = useState<boolean>(false)

  const editClickHandler = () => {
    setEditIsClicked(!editIsClicked)
    console.log(editIsClicked)
  }

  const deleteItem = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id))
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

  const clickAddSavingsHandler = () => {
    setAddNewSavingsClicked(!addNewSavingsClicked)
  }


  return (
    <div className="max-h-[700px] overflow-y-auto scroll-smooth rounded-md relative">

      <div className="absolute right-12 top-10 -translate-y-1/2 transform cursor-pointer">
        <svg
          onClick={clickAddSavingsHandler}
          className="rounded-full p-2 transition-all duration-200 hover:scale-105"
          style={{ fill: '#fff', backgroundColor: 'f33579' }}
          xmlns="http://www.w3.org/2000/svg"
          height="3em"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>

      </div>
      <div className="flex">
        <div className="w-full bg-white dark:bg-darkPrimary">
          {editIsClicked && <StickySavingsNav action={() => editClickHandler()}/>}

          {addNewSavingsClicked && <StickyAddNav action={() => clickAddSavingsHandler()} />}
          <h1 className="my-4 text-center text-5xl font-bold text-primary dark:text-contrast">{props.goalName}</h1>

          <table className="w-full border border-gray-400">
            <thead className="bg-contrast text-2xl text-white dark:bg-primary">
              <tr className="dark:text-darkWhite">
                <th className="border-collapse p-2 ">Amount</th>
                <th className="border-collapse p-2 ">Date added</th>
                <th className="border-collapse p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="text-xl text-black dark:text-darkText">
                  <td className="border border-gray-400 p-2 text-center">
                    <h1>{item.amount}</h1>
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <p>{item.date.toLocaleDateString()}</p>
                  </td>
                  <td className="flex gap-2 border border-gray-400 p-2 text-center">
                    <button onClick={editClickHandler} className="flex w-3/6 items-center justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300">
                      Edit
                    </button>
                    <button className="flex w-3/6 items-center justify-center rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="relative w-full p-4">
            <div className="border-slate-500 flex h-10 w-full overflow-hidden border border-gray-400 dark:bg-darkWhite">
              <h1
                // onClick={progressClickHandler}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-xl text-primary transition-all"
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
