export default function Form(props: any) {
  const twoButtons = (
    <div className="flex w-full gap-2 dark:bg-darkPrimary">
      <button
        type="submit"
        className="mt-6 w-3/6 rounded-md bg-contrast p-2 text-3xl text-white dark:border dark:border-gray-700 dark:bg-transparent dark:text-contrast dark:hover:border-gray-500"
      >
        {props.buttonName}
      </button>
      <button
        onClick={() => props.action()}
        className={`mt-6 w-3/6 rounded-md bg-contrast p-2 text-3xl text-white dark:border dark:border-gray-700 dark:bg-transparent dark:text-contrast dark:hover:border-gray-500`}
      >
        Close
      </button>
    </div>
  )

  return (
    <div className={`h-fit rounded-md bg-white dark:bg-darkPrimary ${props.className}`}>
      {props.heading === '' ? null : (
        <h1 className=" p-4 text-center text-3xl font-bold text-primary dark:text-contrast">{props.heading}</h1>
      )}
      <hr className="w-full border-gray-400 bg-red-200 dark:border-gray-700" />

      {/* <hr className="w-full border-gray-400" /> */}

      <div className="mt-4 flex flex-col gap-2 p-6 ">
        {/* Displays input fields with type text if exist */}
        {props.inputText &&
          props.inputText.map((name: any) => (
            <div className="flex items-center justify-between">
              <h1 className="text-2xl dark:text-darkText">{name}</h1>
              <input className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" type="text" name="" id="" />
            </div>
          ))}

        {/* Displays input fields with type number if exist */}
        {props.inputNum &&
          props.inputNum.map((name: any) => (
            <div className="flex items-center justify-between">
              <h1 className="text-2xl dark:text-darkText">{name}</h1>
              <input className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" type="number" name="" id="" />
            </div>
          ))}

        {/* Displays input fields with type date if exist */}
        {props.inputDate && (
          <div className="flex items-center justify-between">
            <h1 className="text-2xl dark:text-darkText">{props.inputDate}</h1>
            <input type="date" className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" />
          </div>
        )}

        {/* Displays input fields with type password if exist */}
        {props.inputPassword &&
          props.inputPassword.map((password: any, index: any) => (
            <div key={index} className="flex items-center justify-between">
              <h1 className="text-2xl dark:text-darkText">{password}</h1>
              <input type="password" className="w-3/6 rounded-md border border-gray-400 p-2 text-2xl font-bold" />
            </div>
          ))}

        {/* Displays input fields with type password if exist */}
        {props.inputPassword &&
          props.inputPassword.map((password: any, index: any) => (
            <div key={index} className="flex items-center justify-between">
              <h1 className="text-2xl">{password}</h1>
              <input type="password" className="w-3/6 rounded-md border border-gray-400 p-2 text-2xl font-bold" />
            </div>
          ))}

        {/* Displays input fields with type select if exist */}
        {props.inputSelect &&
          props.inputSelect.length > 0 &&
          props.inputSelect.map(({ name, data }: any, index: any) => (
            <div key={index} className="flex items-center justify-between">
              <h1 className="text-2xl dark:text-darkText">{name}</h1>
              <select className="w-3/6 rounded-md border border-gray-400 p-2 text-xl" name={name} id={name}>
                {data.map((option: any, optionIndex: any) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

        <div className="mt-auto flex gap-3">
          {props.formType === "1" ? <button type="submit" className="text-3xl p-2 bg-contrast text-white rounded-md w-full mt-6  dark:bg-primary dark:hover:border-gray-500 dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast" onClick={props.action}>
            {props.buttonName}
          </button> : twoButtons}
        </div>
      </div>
    </div>
  )
}
