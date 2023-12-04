
// @ts-ignore
const FormText = ({ name, inputName, register }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{inputName}</h1>
      <input
        {...register(name)}
        // @ts-ignore
        className="w-3/6 rounded-md border border-gray-400 p-2 text-xl"
        type="text"
        name={name}
      />
    </div>
  );
};

export default FormText;
