import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import '@fontsource/jost'
import './index.css'
import SavingsContextProvider from './context/savings-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SavingsContextProvider>
      <div className='dark:bg-darkPrimary'>
        <App />
      </div>
    </SavingsContextProvider>
  </React.StrictMode>,
)
