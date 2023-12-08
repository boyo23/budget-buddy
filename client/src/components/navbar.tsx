import { Link, useNavigate } from 'react-router-dom'
import { DarkModeToggle } from './dark-mode-toggle'
import { useContext } from 'react'
import { SavingsContext } from '@/context/savings-context'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'

export default function Navbar() {
  const ctx = useContext(SavingsContext)
  const navigate = useNavigate()

  const logoutHandler = () => {
    try {
      localStorage.clear()
      !localStorage.getItem("token") ? navigate("/") : console.log(localStorage)
    
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <nav className={`bg-white transition duration-300 dark:bg-darkPrimary`}>
      <div className="flex items-center justify-between p-6 text-3xl">
        <div className=''>
          <Link to="/home">
            <h1 className="font-bold text-contrast dark:text-contrast">BudgetBuddy</h1>
          </Link>
        </div>
        <h1 className="text-3xl dark:text-contrast">Welcome, {ctx?.userInfo?.username}</h1>
        <div className="flex justify-between items-center">
          <DarkModeToggle />
          <Menu placement='bottom-start' allowHover>
            <MenuHandler>
              <h1 className='dark:text-contrast cursor-pointer'>Settings</h1>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Link to="/profile">
                  <h1 className='dark:text-contrast text-xl'>Profile</h1>
                </Link>
              </MenuItem>
              <MenuItem className='hover:bg-contrast'>
                <h1 onClick={logoutHandler} className='dark:text-contrast text-xl cursor-pointer'>Logout</h1>
              </MenuItem>
            </MenuList>
          </Menu>

        </div>
      </div>
    </nav>
  )
}
