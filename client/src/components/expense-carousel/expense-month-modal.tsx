import React, { useState } from 'react'

interface UpdatedData {
  expense: string
  category: string
  paymentMethod: string
  amount: number
  date: string
}

interface ModalProps {
  onClose: () => void
  onSave: (updatedData: UpdatedData) => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClose, onSave, children }) => {
  const [updatedData, setUpdatedData] = useState<UpdatedData>({
    expense: '',
    category: '',
    paymentMethod: '',
    amount: 0,
    date: '',
  })

  const handleSave = () => {
    onSave(updatedData)
    onClose()
  }

  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 text-black shadow-md dark:bg-darkPrimary">
      <button className="absolute right-0 top-0 m-2 text-gray-500" onClick={onClose}>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      {children}
      <h1 className="mt-4 text-xl font-bold">CHANGE DATA HERE:</h1>

      <label htmlFor="expense">Expense</label>
      <input
        type="text"
        id="expense"
        value={updatedData.expense}
        onChange={(e) => setUpdatedData({ ...updatedData, expense: e.target.value })}
        className="bg-slate-200 my-2 w-full rounded-md border p-2"
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={updatedData.category}
        onChange={(e) => setUpdatedData({ ...updatedData, category: e.target.value })}
        className="bg-slate-200 my-2 w-full rounded-md border p-2"
      >
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Tuition">Tuition</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Others">Others</option>
      </select>

      <label htmlFor="paymentMethod">Payment Method</label>
      <select
        id="paymentMethod"
        value={updatedData.paymentMethod}
        onChange={(e) => setUpdatedData({ ...updatedData, paymentMethod: e.target.value })}
        className="bg-slate-200 my-2 w-full rounded-md border p-2"
      >
        <option value="Gcash">Gcash</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="Cash">Cash</option>
      </select>

      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        id="amount"
        value={updatedData.amount}
        onChange={(e) => setUpdatedData({ ...updatedData, amount: Number(e.target.value) })}
        className="bg-slate-200 my-2 w-full rounded-md border p-2"
      />

      <label htmlFor="date">Date Added</label>
      <input
        type="text"
        id="date"
        value={updatedData.date}
        onChange={(e) => setUpdatedData({ ...updatedData, date: e.target.value })}
        className="bg-slate-200 my-2 w-full rounded-md border p-2"
      />

      <button
        onClick={handleSave}
        className="focus:shadow-outline-pink rounded-md bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 focus:outline-none active:bg-pink-800"
      >
        Save
      </button>
    </div>
  )
}

export default Modal
