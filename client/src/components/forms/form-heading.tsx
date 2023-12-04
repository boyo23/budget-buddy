
export default function FormHeading(props: any) {
  return (
    <div>
      <h1 className=" p-4 text-center text-4xl font-bold text-primary dark:text-contrast">{props.inputHeading}</h1>

      <hr className="w-full border-gray-400 bg-red-500 dark:border-gray-700 mb-6" />
    </div>
  )
}
