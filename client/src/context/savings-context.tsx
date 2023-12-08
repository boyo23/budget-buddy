import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react'
import { redirect } from 'react-router-dom'

type PieData = {
  categoryNames: string[]
  data: number[]
}

type SavingsContextProps = {
  goalIsClicked: boolean
  setGoalIsClicked: Dispatch<SetStateAction<boolean>>
  goalClickHandler: () => void
  addExpenseHandler: () => void
  addCategoryHandler: () => void
  categoryClicked: boolean
  setCategoryClicked: Dispatch<SetStateAction<boolean>>
  expenseClicked: boolean
  setExpenseClicked: Dispatch<SetStateAction<boolean>>
  pieData: PieData
  setPieData: Dispatch<SetStateAction<PieData>>
  thresholdClicked: boolean
  setThresholdClicked: Dispatch<SetStateAction<boolean>>
  clickThresholdHandler: () => void,
  theme: string,
  setTheme: Dispatch<SetStateAction<string>>,
  handleThemeSwitch: () => void,
  fetchedData: {},
  userData: {},
  profileIsChanged: boolean,
  setProfileIsChanged: Dispatch<SetStateAction<boolean>>
  profileChangeHandler: () => void,
  token: any
  setToken: Dispatch<SetStateAction<any>>,
  statusCode: number,
  setStatusCode: Dispatch<SetStateAction<number>>,
  userInfo: any,
  setUserInfo: Dispatch<SetStateAction<any>>,
  loginIsClicked: boolean,
  setLoginIsClicked: Dispatch<SetStateAction<boolean>>,
  addExpenseFormIsClicked: any,
  setAddExpenseFormIsClicked: Dispatch<SetStateAction<boolean>>,
  expenseInfoData: any,
  setExpenseInfoData: Dispatch<SetStateAction<any>>
}

export const SavingsContext = createContext<SavingsContextProps>({
  goalIsClicked: false,
  setGoalIsClicked: () => { },
  goalClickHandler: () => { },
  addExpenseHandler: () => { },
  addCategoryHandler: () => { },
  categoryClicked: false,
  setCategoryClicked: () => { },
  expenseClicked: false,
  setExpenseClicked: () => { },
  pieData: { categoryNames: [], data: [] },
  setPieData: () => { },
  thresholdClicked: false,
  setThresholdClicked: () => { },
  clickThresholdHandler: () => { },
  theme: "light",
  setTheme: () => { },
  handleThemeSwitch: () => { },
  fetchedData: {},
  userData: {},
  profileIsChanged: false,
  setProfileIsChanged: () => { },
  profileChangeHandler: () => { },
  token: null,
  setToken: () => { },
  statusCode: 0,
  setStatusCode: () => { },
  userInfo: null,
  setUserInfo: () => { },
  loginIsClicked: false,
  setLoginIsClicked: () => { },
  addExpenseFormIsClicked: false,
  setAddExpenseFormIsClicked: () => { },
  expenseInfoData: {},
  setExpenseInfoData: () => { },
})

const SavingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [goalIsClicked, setGoalIsClicked] = useState<boolean>(false)
  const [categoryClicked, setCategoryClicked] = useState<boolean>(false)
  const [thresholdClicked, setThresholdClicked] = useState<boolean>(false)
  const [theme, setTheme] = useState("light")
  const [profileIsChanged, setProfileIsChanged] = useState<boolean>(false)
  const [token, setToken] = useState(null)
  const [loginIsClicked, setLoginIsClicked] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState({})
  // const [bareToken, setBareToken] = useState("")
  const [statusCode, setStatusCode] = useState(0)
  const [addExpenseFormIsClicked, setAddExpenseFormIsClicked] = useState(false)
  const [expenseInfoData, setExpenseInfoData] = useState({})

  useEffect(() => {
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const loginHandler = (newToken: string) => {
    // @ts-ignore
    setToken(newToken)
  }

  const [pieData, setPieData] = useState<PieData>({
    categoryNames: [],
    data: [],
  })

  const fetchedData = {
    categoryNames: ['Food', 'Transportation', 'Tuition', 'General', 'Clothes'],
    data: [3000, 1800, 30000, 5000, 6000],
  }

  // const profileChangeHandler = () => {
  //   setProfileIsChanged(data)
  //   // console.log(profileIsChanged)
  // }


  const addCategoryHandler = () => {
    console.log(categoryClicked)
    setCategoryClicked(!categoryClicked)
  }

  const clickThresholdHandler = () => {
    setThresholdClicked(!thresholdClicked)
  }

  // useEffect(() => {
  //   setPieData(fetchedData)
  //   // console.log(goalIsClicked)
  // }, [goalIsClicked])

  const goalClickHandler = () => {
    setGoalIsClicked(!goalIsClicked)
  }

  const userData = {
    email: "lanutanenzo@gmail.com",
    firstName: "Achille Lorenzo",
    lastName: "Lanutan",
    password: "dianneMyLove",
  }

  // useEffect(() => {
  //   console.log(addExpenseFormIsClicked)
  // }, [addExpenseFormIsClicked])

  // useEffect(() => {
  //   console.log(profileIsChanged)
  // }, [profileIsChanged])
  // useEffect(() => {
  //   console.log(`${token}`)
  //   // console.log(1)
  // }, [loginIsClicked])


  useEffect(() => {
    console.log(loginIsClicked)
    try {
      // Retrieve and parse user info from localStorage
      const storedUserInfo = localStorage.getItem("userInfo");
      const storedToken = localStorage.getItem("token")

      // Parse the JSON string if it exists
      const parsedUserInfo = storedUserInfo && JSON.parse(storedUserInfo);
      const parsedToken = storedToken && JSON.parse(storedToken)

      setUserInfo(parsedUserInfo)
      setToken(parsedToken)
    } catch (error) {
      // Handle JSON parsing errors
      console.error('Error parsing user info:', error);
    }
  }, [loginIsClicked]);

  return (
    <SavingsContext.Provider
      // @ts-expect-error
      value={{
        goalIsClicked,
        setGoalIsClicked,
        goalClickHandler,
        pieData,
        setPieData,
        categoryClicked,
        addCategoryHandler,
        setCategoryClicked,
        thresholdClicked,
        setThresholdClicked,
        clickThresholdHandler,
        theme,
        setTheme,
        handleThemeSwitch,
        fetchedData,
        userData,
        // profileIsChanged,
        // profileChangeHandler,
        token,
        setToken,
        statusCode,
        setStatusCode,
        // @ts-ignore
        userInfo,
        // @ts-ignore
        setUserInfo,
        loginIsClicked,
        setLoginIsClicked,
        addExpenseFormIsClicked,
        setAddExpenseFormIsClicked,
        expenseInfoData,
        setExpenseInfoData
      }}
    >
      {children}
    </SavingsContext.Provider>
  )
}

export default SavingsContextProvider
