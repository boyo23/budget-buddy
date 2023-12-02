import { useState } from 'react'
import Navbar from '@/components/navbar'
import Form from '@/components/form'

function Profile() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div>
      <Navbar />
      <div className="col-span-5 row-start-2 mx-4 mt-4 h-fit">
        <div className="rounded-md bg-contrast">
          <h1 className="flex justify-center rounded-md p-4 text-5xl font-bold text-white">PROFILE</h1>
        </div>
        <div className="mt-4 flex">
          <div className="w-full">
            <div
              style={{
                minHeight: '240px',
                maxHeight: '570px',
              }}
              className="flex justify-center rounded-md bg-white"
            >
              <Form
                action={() => console.log('Clicked')}
                className="border- w-2/6 rounded-none border-r border-slate-400"
                heading="PERSONAL"
                buttonName="Make changes"
                inputText={['Email', 'First name', 'Last name']}
                inputPassword={['Password', 'New password']}
                formType="1"
              />
              <div className="flex w-2/6 flex-col">
                <h1 className="p-4 text-center text-3xl font-bold">DELETE</h1>

                <div className="flex justify-center">
                  <button
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    type="submit"
                    className="mt-6 w-5/6 rounded-md bg-contrast p-2 text-3xl text-white hover:border-red-500  hover:bg-gray-900"
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
