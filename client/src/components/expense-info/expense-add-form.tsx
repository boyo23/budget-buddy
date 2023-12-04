import React, { useState, useEffect } from 'react'
// import Form from '../forms/form'
// import FormButton from '../forms/form-button'
// import FormButtonContainer from '../forms/form-button-container'
// import FormDate from '../forms/form-date'
// import FormText from '../forms/form-text'
// import FormSelect from '../forms/form-select'
// import FormSelectOption from '../forms/form-select-option'
// import FormFieldsContainer from '../forms/form-container'
// import FormHeading from '../forms/form-heading'
// import FormNumber from '../forms/form-number'

type Expense = {
  price: number
  quantity: number
  date: Date
  paymentMethod: string
  categoryId: string
  userId: string
}

export default function ExpenseAddForm() {
  const [expenseClicked, setExpenseClicked] = useState<boolean>(false)
  const [expenseBody, setExpenseBody] = useState<Expense>({
    price: 0,
    quantity: 0,
    date: new Date(),
    paymentMethod: "",
    categoryId: "",
    userId: "",
  })

  const addExpenseHandler = () => {
    console.log(expenseClicked)
    setExpenseClicked(!expenseClicked)
  }

  const API_ADDEXPENSE = async () => {
    const url = "https://localhost:3000/api/expense"

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(expenseBody)
      })
    } catch (err: any) {
      console.log(err)
    }
  }

  const inputHandler = (e: any) => {
    setExpenseBody(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    console.log(expenseBody)
  }, [expenseBody])
  return (
    // <Form>
    //   <FormHeading inputHeading="ADD EXPENSE" />
    //   <FormFieldsContainer>
    //     <FormText name="name" inputName="Name" inputAction={inputHandler} />
    //     <FormNumber name="price" inputName="Price" inputAction={inputHandler} />
    //     <FormNumber name="quantity" inputName="Quantity" inputAction={inputHandler} />
    //     <FormDate inputName="Date" inputAction={inputHandler} />
    //     <FormSelect inputName="Payment method" inputAction={inputHandler} name="paymentMethod">
    //       <FormSelectOption optionName="Cash" optionValue="cash" />
    //       <FormSelectOption optionName="GCash" optionValue="gcash" />
    //       <FormSelectOption optionName="Credit card" optionValue="credit" />
    //       <FormSelectOption optionName="Debit card" optionValue="debit" />
    //       <FormSelectOption optionName="Paypal" optionValue="paypal" />
    //     </FormSelect>
    //     <FormSelect inputName="Category" inputAction={inputHandler} name="category">
    //       <FormSelectOption optionName="Food" optionValue="food" />
    //       <FormSelectOption optionName="Tuition" optionValue="tuition" />
    //       <FormSelectOption optionName="Clothes" optionValue="clothes" />
    //       <FormSelectOption optionName="Transportation" optionValue="transportation" />
    //       <FormSelectOption optionName="General" optionValue="general" />
    //     </FormSelect>
    //     <FormButtonContainer>
    //       <FormButton buttonName="Add" buttonAction={null} />
    //       <FormButton buttonName="Close" buttonAction={null} />
    //     </FormButtonContainer>
    //   </FormFieldsContainer>
    // </Form>
    <div style={{ minHeight: '66.66%' }} className="flex w-4/6 flex-grow flex-col rounded-md bg-white dark:bg-darkPrimary">
      {/* <h1 className="p-4 text-center text-4xl font-bold dark:text-contrast">ADD EXPENSE</h1> */}

      <div className={`h-fit rounded-md bg-white dark:bg-darkPrimary`}>

        <h1 className=" p-4 text-center text-4xl font-bold text-primary dark:text-contrast">ADD EXPENSE</h1>

        <hr className="w-full border-gray-400 bg-red-200 dark:border-gray-700" />

        {/* <hr className="w-full border-gray-400" /> */}

        <div className="mt-4 flex flex-col gap-2 p-6 ">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl dark:text-darkText">Name</h1>
            <input onChange={inputHandler} className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" type="text" name="name" id="" />
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl dark:text-darkText">Price</h1>
            <input onChange={inputHandler} className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" type="number" name="price" id="" />
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl dark:text-darkText">Quantity</h1>
            <input onChange={inputHandler} type="number" className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" name='quantity' />
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl dark:text-darkText">Date</h1>
            <input onChange={inputHandler} type="date" name='date' className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" />
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl dark:text-darkText">Payment method</h1>
            <select onChange={inputHandler} className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" name="paymentMethod" id="">
              <option value="cash">Cash</option>
              <option value="gcash">GCash</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl dark:text-darkText">Category</h1>
            <select onChange={inputHandler} className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" name="category" id="">

              <option value="food">Food</option>
              <option value="clothes">Clothes</option>

            </select>
          </div>


          <div className="mt-auto flex gap-3">
            <button onClick={API_ADDEXPENSE} type="submit" className="text-3xl p-2 bg-contrast text-white rounded-md w-full mt-6  dark:bg-primary dark:hover:border-gray-500 dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast">
              Add
            </button>
            <button onClick={addExpenseHandler} type="submit" className="text-3xl p-2 bg-contrast text-white rounded-md w-full mt-6  dark:bg-primary dark:hover:border-gray-500 dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
