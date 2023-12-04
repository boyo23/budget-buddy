import { useContext } from 'react'
import Form from '../form'
import { SavingsContext } from '@/context/savings-context'
import { Dialog } from '@material-tailwind/react'

export default function ExpenseInfo() {
  const ctx = useContext(SavingsContext)

  if (!ctx.expenseClicked) {
    return (
      <div style={{ width: '' }} className="flex w-full flex-col rounded-md bg-white dark:bg-darkPrimary">
        <h1 className="p-4 text-center text-4xl font-bold dark:text-contrast">INFORMATION</h1>
        <hr className="w-full border-gray-400 dark:border-gray-700" />

        <div className="flex h-full flex-grow flex-col p-6">
          <table className="flex flex-grow flex-col">
            <thead className="mb-2 text-center text-2xl  dark:text-contrast">Recently added</thead>
            <tbody className="h-full overflow-auto text-xl dark:text-darkText">
              <tr className="flex justify-between">
                <td>Burger</td>
                <td>11/11/2099</td>
                <td className="font-bold text-green-500">P20,000</td>
              </tr>
              <tr className="flex justify-between">
                <td>Sbarro dinner</td>
                <td>11/11/2099</td>
                <td className="font-bold text-green-500">P120,000</td>
              </tr>
              <tr className="flex justify-between">
                <td>Burger</td>
                <td>11/11/2099</td>
                <td className="font-bold text-green-500">P20,000</td>
              </tr>
              <tr className="flex justify-between">
                <td>Sbarro dinner</td>
                <td>11/11/2099</td>
                <td className="font-bold text-green-500">P120,000</td>
              </tr>
              <tr className="flex justify-between">
                <td>Sbarro dinner</td>
                <td>11/11/2099</td>
                <td className="font-bold text-green-500">P120,000</td>
              </tr>
            </tbody>
          </table>

          <div className="mb-4">
            <button onClick={ctx.addCategoryHandler} className="w-full rounded-md bg-contrast p-2 text-3xl text-white dark:bg-transparent dark:border dark:border-gray-700 dark:text-contrast dark:hover:border-gray-500">
              Add a new category
            </button>
          </div>
          <div className="mt-auto">
            <button onClick={ctx.addExpenseHandler} className="w-full rounded-md bg-contrast p-2 text-3xl text-white dark:bg-transparent dark:border dark:border-gray-700 dark:text-contrast dark:hover:border-gray-500">
              Add expense
            </button>
          </div>
        </div>
        <Dialog className="font-" open={ctx.categoryClicked} handler={ctx.setCategoryClicked}>
          <div style={{ minHeight: '66.66%' }} className="flex flex-grow flex-col rounded-md bg-white dark:bg-darkPrimary">
            <h1 className="p-4 text-center text-4xl font-bold text-primary dark:bg-darkPrimary dark:text-contrast rounded-md">CATEGORY</h1>

            <div className="">
              <Form action={ctx.addCategoryHandler} heading="" buttonName="Add" inputText={['New category']} />
            </div>
          </div>
        </Dialog>
      </div>
    )
  } else {
    return (
      <div style={{ minHeight: '66.66%' }} className="flex w-4/6 flex-grow flex-col rounded-md bg-white dark:bg-darkPrimary">
        <h1 className="p-4 text-center text-4xl font-bold dark:text-contrast">ADD EXPENSE</h1>

        <div className="">
          <Form
            action={ctx.addExpenseHandler}
            heading=""
            buttonName="Add"
            inputText={['Name', 'Price', 'Quantity']}
            inputDate="Date"
            inputSelect={[
              {
                name: 'Payment method',
                data: ['Cash', 'E-Wallet', 'Credit card', 'Debit card', 'Paypal'],
              },
              {
                name: 'Category',
                data: ['Food', 'Transportation', 'General', 'Tuition'],
              },
            ]}
          />
        </div>
      </div>
    )
  }
}
