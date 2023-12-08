import React, { useContext } from 'react'
import { SavingsContext } from '@/context/savings-context'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
  const ctx = useContext(SavingsContext)
  return <div className='text-6xl'>You are not authorized.</div>
  // if (ctx.token) {
  //   return (
  //     <Navigate to="/home" replace />
  //   )
  // } else {
  //   return (
  //     <div className='text-6xl'>You are not authorized.</div>
  //   )
  // }
}
