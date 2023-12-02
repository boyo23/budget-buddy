export default function Form(props: any) {
  const twoButtons = (
    <div className="flex w-full gap-2">
      <button type="submit" className="mt-6 w-3/6 rounded-md bg-contrast p-2 text-3xl text-white">
        {props.buttonName}
      </button>
      <button onClick={() => props.action()} className={`mt-6 w-3/6 rounded-md bg-contrast p-2 text-3xl text-white`}>
        Close
      </button>
    </div>
  )

  return (
    <div className={`h-fit rounded-md bg-white ${props.className}`}>
      {props.heading === '' ? null : <h1 className=" p-4 text-center text-3xl font-bold">{props.heading}</h1>}
      <div className="mt-4 flex flex-col gap-2 p-6">
        {/* Displays input fields with type text if exist */}
        {props.inputText.length > 0 &&
          props.inputText.map((name: any) => (
            <div className="flex items-center justify-between">
              <h1 className="text-2xl">{name}</h1>
              <input className="border-slate-400 w-3/6 rounded-md border p-2 text-xl" type="text" name="" id="" />
            </div>
          ))}
        {/* Displays input fields with type date if exist */}
        {props.inputDate && (
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">{props.inputDate}</h1>
            <input type="date" className="border-slate-400 w-3/6 rounded-md border p-2 text-xl" />
          </div>
        )}
        {/* Displays input fields with type password if exist */}
        {props.inputPassword &&
          props.inputPassword.map((password: any, index: any) => (
            <div key={index} className="flex items-center justify-between">
              <h1 className="text-2xl">{password}</h1>
              <input type="password" className="border-slate-400 w-3/6 rounded-md border p-2 text-2xl font-bold" />
            </div>
          ))}
        {/* Displays input fields with type select if exist */}
        {props.inputSelect &&
          props.inputSelect.length > 0 &&
          props.inputSelect.map(({ name, data }: any, index: any) => (
            <div key={index} className="flex items-center justify-between">
              <h1 className="text-2xl">{name}</h1>
              <select className="border-slate-400 w-3/6 rounded-md border p-2 text-xl" name={name} id={name}>
                {data.map((option: any, optionIndex: any) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        <div className="mt-auto flex gap-3">
          {props.formType === '1' ? (
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-contrast p-2 text-3xl text-white"
              onClick={props.action}
            >
              {props.buttonName}
            </button>
          ) : (
            twoButtons
          )}
        </div>
      </div>
    </div>
  )
}
