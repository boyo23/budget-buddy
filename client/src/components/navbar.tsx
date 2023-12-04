import { Link } from 'react-router-dom'
import { DarkModeToggle } from './dark-mode-toggle'

export default function Navbar() {
  return (
    <nav className={`bg-white transition duration-300 dark:bg-darkPrimary`}>
      <div className="flex items-center justify-between p-6 text-3xl">
        <div className=''>
          <Link to="/">
            <h1 className="font-bold text-contrast dark:text-contrast">BudgetBuddy</h1>
          </Link>
        </div>
        <h1 className="text-3xl dark:text-contrast">Welcome, User</h1>
        <div className="flex justify-between items-center">
          <DarkModeToggle />
          <Link to="/profile">
            <h1 className='dark:text-contrast'>Profile</h1>
          </Link>
        </div>
      </div>
    </nav>
  )
}
