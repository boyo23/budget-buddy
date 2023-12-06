import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/home'
import Profile from '@/pages/profile'
import Login from '@/pages/login'
import Register from '@/pages/register'
import NotFound from '@/pages/not-found'
import SavingsContextProvider from './context/savings-context'

export default function App() {
  return (
    <SavingsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/redirect" element={ <Navigate to="/home" /> } />
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SavingsContextProvider>
  )
}
