// @ts-ignore
const FormNumber = ({ name, inputName, register }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{inputName}</h1>
      <input
      // @ts-ignore
        {...register(name)}
        className="w-3/6 rounded-md border border-gray-400 p-2 text-xl"
        type="number"
        name={name}
      />
    </div>
  )
}

export default FormNumber
