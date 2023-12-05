import { SavingsContext } from "@/context/savings-context";
import { useContext } from "react";

// @ts-ignore
const FormText = ({ name, inputName, register, defaultValue }) => {

  const ctx = useContext(SavingsContext)
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl dark:text-darkText">{inputName}</h1>
      <input
        {...register(name, {
          onchange: () => ctx.profileChangeHandler
        })}
        // @ts-ignore
        className="w-3/6 rounded-md border border-gray-400 p-2 text-xl"
        type="text"
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormText;
