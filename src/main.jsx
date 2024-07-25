import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PortfolioProvider } from './context/PortfolioProvider'
import { ThemeProvider } from './context/ThemeProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PortfolioProvider>
        <RouterProvider router={router} />
      </PortfolioProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
