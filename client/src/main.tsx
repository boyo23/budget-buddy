import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import '@fontsource/jost'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='dark:bg-darkPrimary'>
      <App />
    </div>
  </React.StrictMode>,
)
