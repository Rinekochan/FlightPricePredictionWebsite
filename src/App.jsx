import React from 'react'
import HomePage from './components/pages/home/HomePage'
import AboutPage from './components/pages/about/AboutPage'
import FlightPage from './components/pages/flight/FlightPage'
import FaqPage from './components/pages/faq/FaqPage'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material'
import { fonts } from './constants/styles'

function App() {
  return (
    <ThemeProvider theme={fonts}>
      <Routes>
          <Route path = "/" element={<HomePage />} />
          <Route path = "/about" element={<AboutPage />} />
          <Route path = "/flight" element={<FlightPage />} />
          <Route path = "/faq" element={<FaqPage />} />
          <Route path = "*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
