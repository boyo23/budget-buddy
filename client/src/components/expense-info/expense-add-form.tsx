import React, { useState, useEffect, useRef, useContext } from 'react'
import { useForm } from 'react-hook-form'
import Form from '../forms/form'
import FormButton from '../forms/form-button'
import FormButtonContainer from '../forms/form-button-container'
import FormDate from '../forms/form-date'
import FormText from '../forms/form-text'
import FormSelect from '../forms/form-select'
import FormSelectOption from '../forms/form-select-option'
import FormFieldsContainer from '../forms/form-container'
import FormHeading from '../forms/form-heading'
import FormNumber from '../forms/form-number'
import { SavingsContext } from '@/context/savings-context'

type Expense = {
  price: number
  quantity: number
  date: Date
  paymentMethod: string
  categoryId: string
  userId: string
}

export default function ExpenseAddForm(props: any) {
  // const [expenseClicked, setExpenseClicked] = useState<boolean>(false)
  // const [category, setCategory] = useState([])
  // const [formIsSubmitted, setFormIsSubmitted] = useState(false)

  const ctx = useContext(SavingsContext)

  const handlePost = async(data: any) => {
    const { category, ...newData } = data
    const [categoryId, categoryName] = category.split(",")
    const body = { ...newData, categoryId, categoryName}

    try {
      const response = await fetch('http://localhost:3000/expense/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ctx.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      })  

      console.log(response)

      if (!response.ok) {
      const json = await response.json()
        console.log(json.message)
      }
    } catch(error: any) {
      console.error(error)
    }
  }
  // useEffect(() => {
  //   console.log(body)
  // }, [handlePost])

  const { register, handleSubmit, watch } = useForm()
  // console.log(watch())
  return (
    <Form handleSubmit={() => handleSubmit(data => handlePost(data))} className="">
      <FormHeading inputHeading="ADD EXPENSE" />
      <FormFieldsContainer>
        {/* @ts-ignore */}
        <FormText register={register} name="name" inputName="Name" />
        <FormNumber register={register} name="price" inputName="Price" />
        <FormNumber register={register} name="quantity" inputName="Quantity" />
        <FormDate register={register} name="date" inputName="Date" />
        <FormSelect register={register} inputName="Payment method" name="paymentMethod">
          <FormSelectOption optionName="Cash" optionValue="CASH" />
          <FormSelectOption optionName="GCash" optionValue="GCASH" />
          <FormSelectOption optionName="Credit card" optionValue="CREDIT" />
          <FormSelectOption optionName="Debit card" optionValue="DEBIT" />
        </FormSelect>
        <FormSelect register={register} inputName="Category" name="category" >

          {ctx?.userInfo?.categories?.map(({ name, id }) => (
            <FormSelectOption optionName={name} optionValue={[id, name]} />
          ))}
          {ctx?.userInfo?.categories?.length === 0 && <FormSelectOption optionName={"No existing categories yet."} />}
          {/* <FormSelectOption optionName="Food" optionValue="1" />
          <FormSelectOption optionName="Tuition" optionValue="2" />
          <FormSelectOption optionName="Clothes" optionValue="3" />
          <FormSelectOption optionName="Transportation" optionValue="4" />
          <FormSelectOption optionName="General" optionValue="5" /> */}
        </FormSelect>
        <FormButtonContainer>
          <FormButton buttonAction={props.buttonAction} buttonName="Add" />
          <FormButton type="button" buttonName="Close" buttonAction={props.close} />
        </FormButtonContainer>
      </FormFieldsContainer>
    </Form>
  )
}
