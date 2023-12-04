import React, { useContext } from "react";
import {
  Navbar,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { SavingsContext } from "@/context/savings-context";



import DatePicker from "./expense-date-picker";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const ctx = useContext(SavingsContext)

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  return (
    <Navbar className="sticky top-0 z-10 h-fit max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 dark:bg-primary">
      <div className="flex items-center justify-between text-blue-gray-900 gap-4">
        {/* @ts-ignore */}
        <Input variant="outlined" label="Expense" size="lg" color={ctx.theme === "light" ? "red" : "blue"} className="text-xl dark:text-white" />
        <Select className="dark:text-white text-xl" size="lg" label="Category" color={ctx.theme === "light" ? "red" : "blue"}>
          <Option>Food</Option>
          <Option>Tuition</Option>
          <Option>Transportation</Option>
          <Option>General</Option>
          <Option>Clothes</Option>
        </Select>
        {/* @ts-ignore */}
        <Select className="dark:text-white text-xl" size="lg" label="Payment method" color={ctx.theme === "light" ? "red" : "blue"}>
          <Option>Cash</Option>
          <Option>GCash</Option>
          <Option>Credit card</Option>
          <Option>Debit card</Option>
          <Option>Paypal</Option>
        </Select>
        {/* @ts-ignore */}
        <Input type="number" variant="outlined" label="Amount" size="lg" color={ctx.theme === "light" ? "red" : "blue"} className="text-xl dark:text-white" />
        {/* <DatePicker/> */}
        <input type='date' className='border border-blue-gray-200 rounded-md w-full h-full p-2 text-md dark:bg-transparent dark:text-white dark:border-gray-300 text-xl focus:border-red-500 focus-within:border-red-500' />
        <button className="w-full rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300">
          Update
        </button>
      </div>
    </Navbar>
  );
}