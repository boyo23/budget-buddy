
import React, { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { SavingsContext } from '@/context/savings-context'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { motion } from "framer-motion"
import ImageAnimation from '@/components/image-animation'


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const ctx = useContext(SavingsContext)


  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setStateFunction: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setStateFunction(event.target.value)
  }

  const { register, handleSubmit } = useForm()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlePost = async (data: any) => {
    console.log("Reached handlePost()")
    await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).then((json) => {
      ctx.setToken(json)
      localStorage.setItem("token", JSON.stringify(json))
      console.log(localStorage.getItem("token"))
    }).catch((error) => {
      console.error('Error during fetch:', error);
    }).finally(() => {
      navigate('/home')
    });

  }

  // useEffect(() => {
  //   console.log(ctx.token)
  // }, [ctx.loginIsClicked])


  return (
    <div className=" bg-gradient-to-r from-pink-400 to-pink-600">
      <div className="inset-0 z-0 opacity-75"></div>
      <div className="mx-0 min-h-screen justify-center sm:flex sm:flex-row">
        <div className="z-10 flex flex-col self-center p-20 sm:max-w-5xl xl:max-w-6xl relative">
          <div className='relative top-16'>
            <ImageAnimation
              src_1="https://i.ibb.co/dKSyW6n/bb-2.png"
              src_2="https://i.ibb.co/DbbfMNn/bb-1.png" />
          </div>
          <div className="hidden flex-col self-start text-white lg:flex relative right-8 bottom-80">
            <h1 className=" text-7xl font-bold
">Welcome to BudgetBuddy </h1>
            <p className="pr-3 text-3xl text-white opacity-[0.7] z-15 text-[#4b011b]
">your ultimate sidekick for crushing expenses</p>
          </div>
        </div>

        <div className="z-10 flex justify-center self-center">
          <div className="w-100 mx-auto ml-3 mr-3 rounded-3xl bg-white shadow-lg p-16">
            <form onSubmit={handleSubmit((data) => handlePost(data))}>
              <div className="mb-4">
                <h3 className="text-5xl font-bold text-gray-800 text-center ">Login</h3>
              </div>
              <div className="space-y-5">

                <div className="space-y-2">
                  <label className="text-lg font-medium tracking-wide text-gray-700">Username</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-slate-100 px-4 py-2 text-black focus:border-pink-400 focus:outline-none text-xl"
                    type="text"
                    {...register('username', { required: true })}
                  // onChange={(event) => handleInputChange(event, setUsername)}
                  />
                </div>

                <div className="relative space-y-2">
                  <label className="text-lg font-medium tracking-wide text-gray-700">Password</label>
                  <input
                    className={`w-full content-center rounded-lg border border-gray-300 bg-slate-100 px-4 py-2 pr-6 text-black focus:border-pink-400 focus:outline-none !font-serif text-xl ${showPassword && `!font-sans`}`}
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: true })}
                  // onChange={(event) => handleInputChange(event, setPassword)}
                  />
                  <svg
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-10 h-6 w-6 cursor-pointer text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>

                <button
                  onClick={() => ctx.setLoginIsClicked(!ctx.loginIsClicked)}
                  type='submit'
                  className={`flex w-full justify-center cursor-pointer rounded-lg p-3 font-semibold tracking-wide text-white bg-pink-600 hover:bg-pink-700 transition duration-100 ease-in`}
                >
                  Login
                </button>

              </div>

            </form>
            <div className="mt-2 flex justify-center text-gray-500">
              <p>
                Don't have an account? <a href="/register" className="underline">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
