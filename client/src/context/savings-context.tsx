import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react'

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
  clickThresholdHandler: () => void
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
})

const SavingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [goalIsClicked, setGoalIsClicked] = useState<boolean>(false)
  const [expenseClicked, setExpenseClicked] = useState<boolean>(false)
  const [categoryClicked, setCategoryClicked] = useState<boolean>(false)
  const [thresholdClicked, setThresholdClicked] = useState<boolean>(false)
  const [pieData, setPieData] = useState<PieData>({
    categoryNames: [],
    data: [],
  })

  const fetchedData = {
    categoryNames: ['Food', 'Transportation', 'Tuition', 'General', 'Clothes'],
    data: [3000, 1800, 30000, 5000, 6000],
  }

  const addExpenseHandler = () => {
    console.log(expenseClicked)
    setExpenseClicked(!expenseClicked)
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
    console.log(goalIsClicked)
  }, [goalIsClicked])

  const goalClickHandler = () => {
    setGoalIsClicked(!goalIsClicked)
  }

  return (
    <SavingsContext.Provider
      value={{
        goalIsClicked,
        setGoalIsClicked,
        goalClickHandler,
        addExpenseHandler,
        expenseClicked,
        setExpenseClicked,
        pieData,
        setPieData,
        categoryClicked,
        addCategoryHandler,
        setCategoryClicked,
        thresholdClicked,
        setThresholdClicked,
        clickThresholdHandler,
      }}
    >
      {children}
    </SavingsContext.Provider>
  )
}

export default SavingsContextProvider
