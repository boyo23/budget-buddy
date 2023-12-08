import React, { useContext } from 'react'
import { SavingsContext } from '@/context/savings-context'
import { useNavigate, Navigate } from 'react-router-dom'
import Home from './home'

export default function ProtectedRoute() {
  const ctx = useContext(SavingsContext)
  if (localStorage.getItem("token")) {
    console.log(localStorage.getItem("token"))
    return (
      <Navigate to="/home" replace />
    )
  } else {
    return (
      <div className='text-6xl'>You are not authorized.</div>
    )
  }
}
