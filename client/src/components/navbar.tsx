import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between p-6 text-3xl">
        <div>
          <Link to="/">
            <h1 className="font-bold text-contrast">BudgetBuddy</h1>
          </Link>
        </div>
        <h1 className="text-3xl ">Welcome, User</h1>
        <div className="flex justify-between">
          <h1 className="relative right-8">Dark Mode</h1>
          <Link to="/profile">
            <h1>Profile</h1>
          </Link>
        </div>
      </div>
    </nav>
  )
}
