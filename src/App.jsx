import React from 'react'
import './App.css'
import Topbar from './Topbar/Topbar'
import Home from './Pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contact from './Pages/Contact'
export default function App() {
  return (
    <div>
      <h1>
      <Topbar/>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path='/about' element={<About/>}>About</Route>
          <Route path='/login' element={<Login/>}>Login</Route>
          <Route path='/register'element={<Register/>}>Register</Route>
          <Route path='/contact' element={<Contact/>}>Contact</Route>
        </Routes>
      </h1>
      
    </div>
  )
}
