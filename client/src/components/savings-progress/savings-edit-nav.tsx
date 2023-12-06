import React, { useContext } from 'react'
import { Navbar, Select, Option, Input } from '@material-tailwind/react'
import { useForm, Controller } from 'react-hook-form'
import { SavingsContext } from '@/context/savings-context'

export default function StickySavingsNav({action}) {
  const { register, handleSubmit, watch, control } = useForm()
  const ctx = useContext(SavingsContext)
  return (
    <Navbar className="sticky top-0 z-10 h-fit max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 dark:bg-primary">
      <form onSubmit={handleSubmit(data => console.log(data))} className="flex items-center justify-between text-blue-gray-900 gap-4">

        <Controller
          name="amount"
          control={control}
          render={({ field }) => <Input {...field} variant="outlined" label="Amount" size="lg" color={ctx.theme === "light" ? "red" : "blue"} className="text-xl dark:text-white" />}
        />
        <input {...register("dateAdded")} type='date' className='border border-blue-gray-200 rounded-md w-full h-full p-2 text-md dark:bg-transparent dark:text-white dark:border-gray-300 text-xl focus:border-red-500 focus-within:border-red-500' />
        <button type="submit" className="w-full rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300 text-xl">
          Update
        </button>
        <button onClick={action} type="submit" className="w-full rounded-md bg-contrast p-2 text-center text-white dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast dark:hover:border-gray-300 text-xl">
          Close
        </button>
      </form>
    </Navbar>
  )
}
