import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">

        <h2 className="text-lg font-bold text-emerald-400">
          ExpenseTracker
        </h2>

        <div className="flex gap-5 my-3 md:my-0">
          <Link
            to="/home"
            className="text-slate-400 hover:text-emerald-400 text-sm transition"
          >
            Home
          </Link>

          <Link
            to="/transactions"
            className="text-slate-400 hover:text-emerald-400 text-sm transition"
          >
            Transactions
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-400 hover:text-emerald-400 text-sm transition"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="text-slate-400 hover:text-emerald-400 text-sm transition"
          >
            Profile
          </Link>
        </div>

        <p className="text-slate-500 text-xs text-center">
          © 2026 ExpenseTracker
        </p>

      </div>

    </footer>
  )
}

export default Footer