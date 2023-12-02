export default function Form(props: any) {

  const twoButtons =
    <div className='flex gap-2 w-full'>
      <button type="submit" className="text-3xl p-2 bg-contrast text-white rounded-md w-3/6 mt-6">
        {props.buttonName}
      </button>
      <button onClick={() => props.action()} className={`text-3xl p-2 bg-contrast text-white rounded-md mt-6 w-3/6`}>
        Close
      </button>
    </div>

  return (
    <div className={`bg-white rounded-md h-fit ${props.className}`}>
      {props.heading === "" ? null : <h1 className=" text-3xl font-bold text-center p-4 text-primary">{props.heading}</h1>}
      <hr className="w-full border-gray-400 bg-red-200" />


      {/* <hr className="w-full border-gray-400" /> */}

      <div className="flex flex-col gap-2 p-6 mt-4">

        {/* Displays input fields with type text if exist */}
        {props.inputText && props.inputText.map((name: any) => (
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">{name}</h1>
            <input className="border border-gray-400 rounded-md w-3/6 p-2 text-xl" type="text" name="" id="" />
          </div>
        ))}

        {/* Displays input fields with type number if exist */}
        {props.inputNum && props.inputNum.map((name: any) => (
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">{name}</h1>
            <input className="border border-gray-400 rounded-md w-3/6 p-2 text-xl" type="number" name="" id="" />
          </div>
        ))}

        {/* Displays input fields with type date if exist */}
        {props.inputDate &&
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl'>{props.inputDate}</h1>
            <input type='date' className='border border-gray-400 rounded-md w-3/6 p-2 text-xl' />
          </div>}

        {/* Displays input fields with type password if exist */}
        {props.inputPassword && props.inputPassword.map((password: any, index: any) => (
          <div key={index} className="flex justify-between items-center">
            <h1 className="text-2xl">{password}</h1>
            <input type='password' className='border border-gray-400 rounded-md w-3/6 p-2 font-bold text-2xl' />
          </div>
        ))}


        {/* Displays input fields with type select if exist */}
        {props.inputSelect && props.inputSelect.length > 0 && props.inputSelect.map(({ name, data }: any, index: any) => (
          <div key={index} className="flex justify-between items-center">
            <h1 className="text-2xl">{name}</h1>
            <select
              className="border border-gray-400 rounded-md w-3/6 p-2 text-xl"
              name={name}
              id={name}
            >
              {data.map((option: any, optionIndex: any) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div className="mt-auto flex gap-3">

          {props.formType === "1" ? <button type="submit" className="text-3xl p-2 bg-contrast text-white rounded-md w-full mt-6" onClick={props.action}>
            {props.buttonName}
          </button> : twoButtons}

        </div>
      </div>
    </div>
  )
}