import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from '@/pages/not-found'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
