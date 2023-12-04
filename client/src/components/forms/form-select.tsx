// @ts-ignore
export default function FormSelect({name, inputName, register, children}) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{inputName}</h1>
      <select {...register(name)} className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" name={name} id="">
        {children}
      </select>
    </div>
  )
}
