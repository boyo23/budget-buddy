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
  bareToken: any,
  setBareToken: Dispatch<SetStateAction<any>>
}

export const SavingsContext = createContext<SavingsContextProps>({
  goalIsClicked: false,
  setGoalIsClicked: () => {},
  goalClickHandler: () => {},
  addExpenseHandler: () => {},
  addCategoryHandler: () => {},
  categoryClicked: false,
  setCategoryClicked: () => {},
  expenseClicked: false,
  setExpenseClicked: () => {},
  pieData: { categoryNames: [], data: [] },
  setPieData: () => {},
  thresholdClicked: false,
  setThresholdClicked: () => {},
  clickThresholdHandler: () => {},
  theme: "light",
  setTheme: () => {},
  handleThemeSwitch: () => {},
  fetchedData: {},
  userData: {},
  profileIsChanged: false,
  setProfileIsChanged: () => {},
  profileChangeHandler: () => {},
  token: null,
  setToken: () => {},
  statusCode: 0,
  setStatusCode: () => {},
  bareToken: null,
  setBareToken: () => {}
})

const SavingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [goalIsClicked, setGoalIsClicked] = useState<boolean>(false)
  const [categoryClicked, setCategoryClicked] = useState<boolean>(false)
  const [thresholdClicked, setThresholdClicked] = useState<boolean>(false)
  const [theme, setTheme] = useState("light")
  const [profileIsChanged, setProfileIsChanged] = useState<boolean>(false)
  const [token, setToken] = useState("")
  const [bareToken, setBareToken] = useState("")
  const [statusCode, setStatusCode] = useState(0)

  useEffect(() => {
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const [pieData, setPieData] = useState<PieData>({
    categoryNames: [],
    data: [],
  })

  const fetchedData = {
    categoryNames: ['Food', 'Transportation', 'Tuition', 'General', 'Clothes'],
    data: [3000, 1800, 30000, 5000, 6000],
  }

  const profileChangeHandler = () => {
    setProfileIsChanged(data)
    // console.log(profileIsChanged)
  }


  const addCategoryHandler = () => {
    console.log(categoryClicked)
    setCategoryClicked(!categoryClicked)
  }

  const clickThresholdHandler = () => {
    setThresholdClicked(!thresholdClicked)
  }

  useEffect(() => {
    setPieData(fetchedData)
    // console.log(goalIsClicked)
  }, [goalIsClicked])

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
  //   console.log(profileIsChanged)
  // }, [profileIsChanged])

  return (
    <SavingsContext.Provider
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
        profileIsChanged,
        profileChangeHandler,
        token,
        setToken,
        statusCode,
        setStatusCode,
        bareToken,
        setBareToken
      }}
    >
      {children}
    </SavingsContext.Provider>
  )
}

export default SavingsContextProvider
