import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl px-8 py-3 flex items-center justify-between sticky top-0 z-50'>

      <div className='flex items-center gap-3'>
        <img
          className='h-14 w-14 rounded-full object-cover border-2 border-emerald-400 shadow-lg'
          src="https://preview.redd.it/logo-for-my-expense-tracker-v0-ty6r9zx7ixgg1.png?width=1080&crop=smart&auto=webp&s=326e95c162dec389a6473033b348529d672e4325"
          alt="logo"
        />

        <h1 className='text-2xl font-bold text-emerald-400'>
          ExpenseTracker
        </h1>
      </div>

      <div className='flex items-center gap-8 text-slate-200 font-semibold text-lg'>

        <span
          className='px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300'
        >
          Home
        </span>

        <span
          className='px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300'
        >
          Transactions
        </span>

        <span
          className='px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300'
        >
          Dashboard
        </span>

        <span
          className='px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300'
        >
          Profile
        </span>

      </div>
    </div>
  )
}

export default Navbar