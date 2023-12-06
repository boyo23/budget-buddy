import React, { useContext } from 'react'
import { SavingsContext } from '@/context/savings-context'
import { useNavigate, Navigate } from 'react-router-dom'
import Home from './home'

export default function ProtectedRoute() {
  const ctx = useContext(SavingsContext)

  if (ctx.userToken) {
    return (
      <Navigate to="/home" replace />
    )
  } else {

    console.log(1)
    console.log(ctx.userToken)
    console.log(2)

    return (
      <div className='text-6xl'>You are not authorized.</div>
    )
  }
}
