import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PortfolioProvider } from './context/PortfolioProvider'
import { BlogProvider } from './context/BlogContext'
import { ThemeProvider } from './context/ThemeProvider'
import router from './router'
import './index.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PortfolioProvider>
        <BlogProvider>
        <RouterProvider router={router} />
        </BlogProvider>  
      </PortfolioProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
