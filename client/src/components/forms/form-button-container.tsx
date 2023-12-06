
export default function FormButtonContainer(props: any) {
  return (
    <div className={`mt-auto flex gap-3 ${props.className}`}>
      {props.children}
    </div>
  )
}
