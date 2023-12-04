
export default function Form(props: any) {
  return (
    <div className="flex w-4/6 flex-grow flex-col rounded-md bg-white dark:bg-darkPrimary">
      <div className={`h-fit rounded-md bg-white dark:bg-darkPrimary`}>
        {props.children}
      </div>
    </div>
  )
}
