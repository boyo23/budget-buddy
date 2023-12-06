import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/home'
import Profile from '@/pages/profile'
import Login from '@/pages/login'
import Register from '@/pages/register'
import NotFound from '@/pages/not-found'
import SavingsContextProvider from './context/savings-context'
import ProtectedRoute from './pages/protected-route'
import { SavingsContext } from './context/savings-context'
import { useContext } from 'react'

export default function App() {
  const ctx = useContext(SavingsContext)

  return (
    <SavingsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/redirect" element={ <Navigate to="/home" /> } />
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/protectedRoute" element={<ProtectedRoute/>}></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SavingsContextProvider>
  )
}
