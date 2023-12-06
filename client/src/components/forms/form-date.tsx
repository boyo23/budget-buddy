// @ts-ignore
export default function FormDate({ name, inputName, register }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{inputName}</h1>
      <input {...register(name)} type="date" name={name} className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" />
    </div>
  )
}
