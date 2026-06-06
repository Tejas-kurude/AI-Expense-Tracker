import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'
import Profile from '../pages/Profile'


const AppRoutes  = () => {
  return (
    
        <Routes>
            
        <Route path='/home' element={<Home />} />
        <Route path='/transactions' element={<Transactions />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/profile' element={<Profile />}/>

        </Routes>
      

  )
}

export default AppRoutes 
