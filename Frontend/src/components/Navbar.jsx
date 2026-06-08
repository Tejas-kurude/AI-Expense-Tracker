import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const token = localStorage.getItem("token")
  return (
    <div className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl px-8 py-3 flex items-center justify-between sticky top-0 z-50'>

      {/* Logo */}
      <Link to="/home" className='flex items-center gap-3'>
        <img
          className='h-14 w-14 rounded-full object-cover border-2 border-emerald-400 shadow-lg'
          src="https://preview.redd.it/logo-for-my-expense-tracker-v0-ty6r9zx7ixgg1.png?width=1080&crop=smart&auto=webp&s=326e95c162dec389a6473033b348529d672e4325"
          alt="logo"
        />

        <h1 className='text-2xl font-bold text-emerald-400'>
          ExpenseTracker
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className='flex items-center gap-6 text-slate-200 font-semibold text-lg'>

        <Link
          to="/home"
          className='px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300'
        >
          Home
        </Link>

        <Link
          to="/transaction"
          className='px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300'
        >
          Transactions
        </Link>

        <Link
          to="/dashboard"
          className='px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300'
        >
          Dashboard
        </Link>

        <Link
          to="/profile"
          className='px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300'
        >
          Profile
        </Link>

        <Link
          to="/login"
          className='bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md'
        >
          {token?"Logout":"LogIn"}
        </Link>

      </div>











    </div>
  )
}

export default Navbar
