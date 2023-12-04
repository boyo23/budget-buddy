
export default function FormDate(props: any) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{props.inputName}</h1>
      <input onChange={props.inputAction} type="date" name='date' className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" />
    </div>
  )
}
