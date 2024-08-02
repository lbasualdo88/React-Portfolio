import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PortfolioProvider } from './context/PortfolioProvider'
import { ThemeProvider } from './context/ThemeProvider'
import router from './router'
import ReactGA from 'react-ga4';
import './index.css'
import PageTracker from '../src/components/PageTracker';


const TRACKING_ID = "G-VTZLD3PZ66"; // Reemplaza con tu ID de seguimiento
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PortfolioProvider>
        <RouterProvider router={router} />
        <PageTracker />
      </PortfolioProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
