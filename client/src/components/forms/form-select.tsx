
export default function FormSelect(props: any) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{props.inputName}</h1>
      <select onChange={props.action} className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" name={props.name} id="">
        {props.children}
      </select>
    </div>
  )
}
