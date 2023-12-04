
export default function Form({handleSubmit, children}) {
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex w-4/6 flex-grow flex-col rounded-md bg-white dark:bg-darkPrimary">
      <div className={`h-fit rounded-md bg-white dark:bg-darkPrimary`}>
        {children}
      </div>
    </form>
  )
}
