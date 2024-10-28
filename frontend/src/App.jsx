import React from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FlightPage from './pages/FlightPage'
import FaqPage from './pages/FaqPage'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material'
import { fonts } from './styles/styles'

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
