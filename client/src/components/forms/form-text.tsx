// FormText Component
export default function FormText(props: any) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{props.inputName}</h1>
      <input
        onChange={(e) => props.inputAction((prev: any) => ({ ...prev, [props.name]: e.target.value }))}
        className="w-3/6 rounded-md border border-gray-400 p-2 text-xl"
        type="text"
        name={props.name}
      />
    </div>
  );
}
