import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PostLog = () => {
  const navigate = useNavigate()

  return (
    <>

    <Navbar/>
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Track Every
              <span className="text-emerald-400"> Transaction </span>
              Like a Pro
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed">
              Keep complete control over your expenses and income.
              Analyze spending habits, monitor cash flow, and
              make smarter financial decisions with ExpenseTracker.
            </p>

            <button
              onClick={() => navigate('/transaction')}
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Add Your Transaction
            </button>

          </div>

          {/* Right Image */}
          <div className="group">

            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
              alt="Finance Dashboard"
              className="rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
            />

          </div>

        </div>

      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Use ExpenseTracker?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-4">💸</div>

            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              Expense Tracking
            </h3>

            <p className="text-slate-400">
              Record daily expenses and maintain accurate financial logs.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>

            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              Analytics
            </h3>

            <p className="text-slate-400">
              Understand spending trends and improve budgeting decisions.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl mb-4">🔒</div>

            <h3 className="text-xl font-bold mb-3 text-emerald-400">
              Secure Data
            </h3>

            <p className="text-slate-400">
              JWT authentication ensures your transactions stay private.
            </p>
          </div>

        </div>

      </div>

      {/* CTA Section */}
      <div className="bg-slate-800 border-t border-slate-700">

        <div className="max-w-5xl mx-auto text-center py-20 px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Manage Your Finances?
          </h2>

          <p className="text-slate-400 text-lg mb-8">
            Start recording transactions and gain better visibility
            into your financial future.
          </p>

          <button
            onClick={() => navigate('/transaction')}
            className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Add Your First Transaction
          </button>

        </div>

      </div>

    </div>
    </>

  )
}

export default PostLog