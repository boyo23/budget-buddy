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
import { Dialog, Typography } from '@material-tailwind/react'
import { Navigate } from 'react-router-dom'


function Profile() {
  const [isHovering, setIsHovering] = useState(false)
  const [isDeleteClicked, setIsDeleteClicked] = useState(false)
  const [isUpdateClicked, setIsUpdateClicked] = useState(false)

  const updateClickHandler = () => {
    setIsUpdateClicked(!isUpdateClicked)
  }

  const deleteClickHandler = () => {
    setIsDeleteClicked(!isDeleteClicked)
  }

  const ctx = useContext(SavingsContext)
  const { register, watch, handleSubmit } = useForm()
  // console.log(watch())

  if (ctx.userInfo === "" && ctx.statusCode !== 401) {
    return <Navigate to="/protectedRoute" replace />;
  }
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
              <Form className={` w-2/6`}>
                <FormHeading inputHeading="PROFILE" />
                <FormFieldsContainer>
                  {/* @ts-ignore */}
                  <FormText defaultValue={ctx.userInfo?.email} register={register} name="email" inputName="Email" isDisabled={true} />
                  <FormText defaultValue={ctx.userInfo?.firstName} register={register} name="firstName" inputName="First name" />
                  <FormText defaultValue={ctx.userInfo?.lastName} register={register} name="lastName" inputName="Last name" />
                  <FormPassword defaultValue={ctx.userInfo?.password} register={register} name="password" inputName="Password" />

                  {ctx.profileIsChanged && <FormPassword register={register} name="newPassword" inputName="New password" />}

                  <FormButtonContainer>
                    <FormButton type="button" buttonName="Update profile" buttonAction={updateClickHandler} />
                    {/* <FormButton type="button" buttonName="Close" buttonAction={ctx.clickThresholdHandler} /> */}
                  </FormButtonContainer>
                </FormFieldsContainer>
              </Form>
              <div className="flex w-2/6 flex-col">
                <h1 className="p-4 text-center text-4xl font-bold dark:text-contrast">DELETE</h1>
                <hr className="w-full border-gray-400 dark:border-gray-700 bg-red-200" />


                <div className="flex justify-center">
                  <Dialog open={isDeleteClicked} handler={deleteClickHandler}>
                    <Form handleSubmit={handleSubmit}>
                      <FormHeading inputHeading="Are you sure?" />
                      <Typography className='m-auto text-center w-4/6 text-xl'>Deleting your account would permanently remove your account from our database which is irreversible.</Typography>
                      <FormButtonContainer className="pb-6 px-6">
                        <FormButton buttonAction={null} buttonName="Yes, I think." />
                        <FormButton buttonAction={deleteClickHandler} buttonName="No." />
                      </FormButtonContainer>
                    </Form>
                  </Dialog>
                  <button
                    onClick={deleteClickHandler}
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
      <Dialog open={isUpdateClicked} handler={updateClickHandler}>
        <Form className={``} handleSubmit={handleSubmit}>
          <FormHeading inputHeading="Profile" />
          <FormFieldsContainer>
            {/* @ts-ignore */}
            <FormText defaultValue={ctx.userInfo?.email} register={register} name="email" inputName="Email" isDisabled={true} />
            <FormText defaultValue={ctx.userInfo?.firstName} register={register} name="firstName" inputName="First name" />
            <FormText defaultValue={ctx.userInfo?.lastName} register={register} name="lastName" inputName="Last name" />
            <FormPassword defaultValue={ctx.userInfo?.password} register={register} name="password" inputName="Current password" />

            <FormPassword register={register} name="newPassword" inputName="New password" />

            <FormButtonContainer>
              <FormButton buttonName="Update profile" buttonAction={null} />
              <FormButton type="button" buttonName="Close" buttonAction={updateClickHandler} />
            </FormButtonContainer>
          </FormFieldsContainer>
        </Form>
      </Dialog>
    </div>
  )
}

export default Profile
