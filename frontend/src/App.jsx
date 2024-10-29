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
import DatasetPage from './pages/DatasetPage'

function App() {
  
  return (
    <ThemeProvider theme={fonts}>
      <Routes>
          <Route path = "/" element={<HomePage />} />
          <Route path = "/about" element={<AboutPage />} />
          <Route path = "/predict" element={<PredictPage />} />
          <Route path = "/recommend" element={<RecommendPage />} />
          <Route path = "/classify" element={<ClassifyPage />} />
          <Route path = "/dataset" element={<DatasetPage />} />
          <Route path = "*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
