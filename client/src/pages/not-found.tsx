import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <Link to="/.." className="text-2xl text-gray-600 hover:underline">
          Page not found
        </Link>
      </div>
    </div>
  )
}
