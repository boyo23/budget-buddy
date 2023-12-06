
export default function Form({handleSubmit, children, className, action}) {
  return (
    <form onSubmit={handleSubmit?.((data) => action(data))} className={`flex flex-col rounded-md bg-white dark:bg-darkPrimary ${className}`}>
      <div className={`h-fit rounded-md bg-white dark:bg-darkPrimary`}>
        {children}
      </div>
    </form>
  )
}
