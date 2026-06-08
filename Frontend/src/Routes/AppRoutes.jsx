import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'
import Profile from '../pages/Profile'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import PostLog from '../pages/PostLog'


const AppRoutes = () => {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/home" element={<PostLog />} />
      <Route path="/transaction" element={<Transactions />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      

    </Routes>

  )
}

export default AppRoutes 
