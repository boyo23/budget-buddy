
export default function FormButton(props: any) {
  return (
    <>
      <button onClick={props.buttonAction} type={props?.type} className="text-3xl p-2 bg-contrast text-white rounded-md w-full mt-6  dark:bg-primary dark:hover:border-gray-300 dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast">
        {props.buttonName}
      </button>
    </>
  )
}
