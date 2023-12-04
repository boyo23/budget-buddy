
export default function FormNumber(props: any) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{props.inputName}</h1>
      <input onChange={props.inputAction} type="number" className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" name='quantity' />
    </div>
  )
}
