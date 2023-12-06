import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Profile from '@/pages/profile'
import NotFound from '@/pages/not-found'
import SavingsContextProvider from './context/savings-context'

export default function App() {
  return (
    <SavingsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SavingsContextProvider>
  )
}
