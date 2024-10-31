import React from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PredictPage from './pages/PredictPage'
import RecommendPage from './pages/RecommendPage'
import ClassifyPage from './pages/ClassifyPage'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material'
import { fonts } from './styles/styles'

function App() {
  // This component will returns the link routes to different pages
  return (
    <ThemeProvider theme={fonts}>
      <Routes>
          <Route path = "/" element={<HomePage />} />
          <Route path = "/about" element={<AboutPage />} />
          <Route path = "/predict" element={<PredictPage />} />
          <Route path = "/recommend" element={<RecommendPage />} />
          <Route path = "/classify" element={<ClassifyPage />} />
          <Route path = "*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
