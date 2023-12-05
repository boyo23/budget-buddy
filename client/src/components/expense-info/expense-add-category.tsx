
import { useForm } from 'react-hook-form'
import Form from '../forms/form'
import FormButton from '../forms/form-button'
import FormButtonContainer from '../forms/form-button-container'
import FormText from '../forms/form-text'
import FormFieldsContainer from '../forms/form-container'
import FormHeading from '../forms/form-heading'

export default function ExpenseAddCategory({close}) {
  const { register, handleSubmit } = useForm()

  return (
    <Form handleSubmit={handleSubmit}>
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
