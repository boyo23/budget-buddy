import React, { useContext } from "react";
import {
  Navbar,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { SavingsContext } from "@/context/savings-context";
import { useForm, Controller } from "react-hook-form";

export function StickyOverviewNav({action}) {
  const [openNav, setOpenNav] = React.useState(false);
  const ctx = useContext(SavingsContext)

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const { control, handleSubmit, watch, register } = useForm()
  // console.log(watch())
  return (
    <Navbar className="sticky top-0 z-10 h-auto max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 dark:bg-primary ">
      <form onSubmit={handleSubmit(data => console.log(data))} className="flex items-center text-blue-gray-900 gap-4 justify-between">

        <Controller
          name="expense"
          control={control}
          render={({ field }) => <Input {...field} variant="outlined" label="Expense" size="lg" color={ctx.theme === "light" ? "red" : "blue"} className="text-xl dark:text-white" />}
        />

        <Controller
          name="category"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Select className="dark:text-white text-xl" size="lg" color={ctx.theme === "light" ? "red" : "blue"} label="Category" {...field}>
              {/* Where fetchedData is data fetched from the database in order to dynamically populate a user's list of categories */}
              {ctx.fetchedData.categoryNames.sort().map((category, index) => (
                <Option key={index} value={category.toLowerCase()}>
                  {category}
                </Option>
              ))}
            </Select>
          )}
        />

        <Controller
          name="paymentMethod"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Select className="dark:text-white text-xl" size="lg" color={ctx.theme === "light" ? "red" : "blue"} label="Payment method" {...field}>
              <Option value="cash">Cash</Option>
              <Option value="gcash">Gcash</Option>
              <Option value="credit">Credit card</Option>
              <Option value="debit">Debit card</Option>
              <Option value="paypal">Paypal</Option>
            </Select>
          )}
        />

        <Controller
          name="amount"
          control={control}
          render={({ field }) => <Input {...field} variant="outlined" label="Amount" size="lg" color={ctx.theme === "light" ? "red" : "blue"} className="text-xl dark:text-white" />}
        />
        <input {...register("date")} type='date' className='border border-blue-gray-200 rounded-md w-full h-full p-2 text-md dark:bg-transparent dark:text-white dark:border-gray-300 text-xl focus:border-red-500 focus-within:border-red-500' />
        <button type="submit" className="w-full rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300 text-xl">
          Update
        </button>
        <button onClick={action} type="submit" className="w-full rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300 text-xl">
          Close
        </button>
      </form>
    </Navbar>
  );
}