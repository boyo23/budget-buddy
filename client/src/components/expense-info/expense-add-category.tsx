
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
  const [categoryBody, setCategoryBody] = useState({
    name: "",
  })


  const handlePost = async (data: any) => {
    console.log(data)
    fetch('http://localhost:3000/category/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ctx.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response)
      return response.json();
    }).then((json) => {
      console.log(json)
    }).catch((error) => {
      console.error('Error during fetch:', error);
    }).finally(() => {
      // console.log("Post")
    })
  }

  // useEffect(() => {
  //   console.log(ctx.token)
  // }, [categoryBody])

  return (
    <Form action={handleSubmit(data => handlePost(data))} handleSubmit={handleSubmit}>
      <FormHeading inputHeading="CATEGORY" />
      <FormFieldsContainer>
        {/* @ts-ignore */}
        <FormText register={register} name="name" inputName="New category" />
        <FormButtonContainer>
          <FormButton buttonName="Add" buttonAction={close} />
          <FormButton buttonName="Close" buttonAction={close} />
        </FormButtonContainer>
      </FormFieldsContainer>
    </Form>
  )
}
