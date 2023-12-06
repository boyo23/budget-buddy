
// @ts-ignore
const FormPassword = ({ name, inputName, register, defaultValue }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{inputName}</h1>
      <input
        {...register(name)}
        // @ts-ignore
        className="w-3/6 rounded-md border border-gray-400 text-xl font-serif text-primary"
        type="password"
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormPassword;
