
import { useForm } from 'react-hook-form'
import Form from '../forms/form'
import FormButton from '../forms/form-button'
import FormButtonContainer from '../forms/form-button-container'
import FormText from '../forms/form-text'
import FormFieldsContainer from '../forms/form-container'
import FormHeading from '../forms/form-heading'
import { useContext, useState, useEffect } from 'react'
import { SavingsContext } from '@/context/savings-context'


export default function ExpenseAddCategory({ close }) {
  const ctx = useContext(SavingsContext)
  const { register, handleSubmit, watch } = useForm()
  // @ts-ignore
  const [ categoryBody, setCategoryBody ] = useState({
    name: "",
    userId: ""
  })


  const handlePost = async (data: any) => {
    console.log("Reached handlePost()")

    setCategoryBody({
      name: data?.category,
      userId: ctx.token.id
    })
    
    const response = await fetch('http://localhost:3000/category', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ctx.bareToken}`,
      },
      body: JSON.stringify(categoryBody),
    })
      if(!response.ok) {
        const data = await response.json()
        console.log(data.message)
        console.log()
      } else {
        console.error("OTIN")
        console.log(categoryBody)
      }
  }

  useEffect(() => {
    console.log(categoryBody)
    console.log(ctx.token)
  }, [categoryBody])

  console.log(watch())
  return (
    <Form action={handleSubmit(data => handlePost(data))} handleSubmit={handleSubmit}>
      <FormHeading inputHeading="CATEGORY" />
      <FormFieldsContainer>
        {/* @ts-ignore */}
        <FormText register={register} name="category" inputName="New category" />
        <FormButtonContainer>
          <FormButton buttonName="Add" buttonAction={null} />
          <FormButton buttonName="Close" buttonAction={close} />
        </FormButtonContainer>
      </FormFieldsContainer>
    </Form>
  )
}
