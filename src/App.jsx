import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Home, Draft } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/draft' element={<Draft />} />
    </Routes>
  )
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper
