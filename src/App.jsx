import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Login2 from './pages/Login2'
import Login3 from './pages/Login3'
import Login_Page4 from './pages/Login3D'
import Register from './pages/Register'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/login3" element={<Login3 />} />
      <Route path="/login4" element={<Login_Page4 />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
