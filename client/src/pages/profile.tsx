import { useState, useContext } from 'react'
import Navbar from '@/components/navbar'
import Form from '@/components/forms/form'
import FormHeading from '@/components/forms/form-heading'
import FormText from '@/components/forms/form-text'
import FormFieldsContainer from '@/components/forms/form-container'
import FormButtonContainer from '@/components/forms/form-button-container'
import FormButton from '@/components/forms/form-button'
import { SavingsContext } from '@/context/savings-context'
import { useForm } from 'react-hook-form'
import FormPassword from '@/components/forms/form-password'


function Profile() {
  const [isHovering, setIsHovering] = useState(false)
  const ctx = useContext(SavingsContext)

  const { register, watch, handleSubmit } = useForm()
  return (
    <div className='dark:bg-primary h-screen'>
      <Navbar />
      <div className="col-span-5 row-start-2 mx-4 mt-4 h-fit">
        <div className="rounded-md bg-contrast dark:bg-darkPrimary">
          <h1 className="flex justify-center rounded-md p-4 text-5xl font-bold text-white dark:text-contrast">PROFILE</h1>
        </div>
        <div className="mt-4 flex">
          <div className="w-full">
            
            <div
              className=" min-h-[240px] flex justify-center rounded-md bg-white dark:bg-darkPrimary"
            >
              <Form className={` w-2/6`} handleSubmit={handleSubmit}>
                <FormHeading inputHeading="PROFILE" />
                <FormFieldsContainer>
                  {/* @ts-ignore */}
                  <FormText defaultValue={ctx.userData.email} register={register} name="email" inputName="Email" />
                  <FormText defaultValue={ctx.userData.firstName} register={register} name="firstName" inputName="First name" />
                  <FormText defaultValue={ctx.userData.lastName} register={register} name="lastName" inputName="Last name" />
                  <FormPassword defaultValue={ctx.userData.password} register={register} name="password" inputName="Password" />

                  {ctx.profileIsChanged && <FormPassword register={register} name="newPassword" inputName="New password" />}

                  <FormButtonContainer>
                    <FormButton buttonName="Update" buttonAction={null} />
                    <FormButton buttonName="Close" buttonAction={ctx.clickThresholdHandler} />
                  </FormButtonContainer>
                </FormFieldsContainer>
              </Form>
              <div className="flex w-2/6 flex-col">
                <h1 className="p-4 text-center text-4xl font-bold dark:text-contrast">DELETE</h1>
                <hr className="w-full border-gray-400 dark:border-gray-700 bg-red-200" />


                <div className="flex justify-center">
                  <button
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    type="submit"
                    className="mt-11 w-5/6 rounded-md bg-contrast p-2 text-3xl text-white hover:border-red-500  hover:bg-gray-900 dark:bg-primary dark:hover:border-red-500 dark:bg-transparent dark:border dark:border-gray-400 dark:text-contrast"
                  >
                    Delete
                  </button>

                </div>
                <h1 className={`mt-2 text-center text-xl text-gray-500 ${isHovering && 'text-red-500'}`}>
                  Deleting your account is irreversible. Make a wise choice.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
