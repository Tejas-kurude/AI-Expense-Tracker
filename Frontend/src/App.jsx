import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AppRoutes  from './Routes/AppRoutes'
import Dashboard from './pages/Dashboard'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './pages/Profile'
import Transactions from './pages/Transactions'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if(!token){
    navigate("/login")
  }
  
  return (
<>

<div className="min-h-screen flex flex-col">

  <main className="flex-1">
    <AppRoutes />
  </main>

  <Footer />
</div>
</>
  )
}

export default App
