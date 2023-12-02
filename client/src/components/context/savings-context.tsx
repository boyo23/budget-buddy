import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react'

interface SavingsContextProps {
  goalIsClicked: boolean
  setGoalIsClicked: Dispatch<SetStateAction<boolean>>
  goalClickHandler: () => void
  addExpenseHandler: () => void
  expenseClicked: boolean
  setExpenseClicked: Dispatch<SetStateAction<boolean>>
}

export const SavingsContext = createContext<SavingsContextProps>({
  goalIsClicked: false,
  setGoalIsClicked: () => {},
  goalClickHandler: () => {},
  addExpenseHandler: () => {},
  expenseClicked: false,
  setExpenseClicked: () => {},
})

const SavingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [goalIsClicked, setGoalIsClicked] = useState<boolean>(false)
  const [expenseClicked, setExpenseClicked] = useState<boolean>(false)

  const addExpenseHandler = () => {
    console.log(expenseClicked)
    setExpenseClicked(!expenseClicked)
  }

  useEffect(() => {
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
      }}
    >
      {children}
    </SavingsContext.Provider>
  )
}

export default SavingsContextProvider
