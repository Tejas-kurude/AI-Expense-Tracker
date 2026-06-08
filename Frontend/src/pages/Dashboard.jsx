import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">

        <div className="max-w-3xl w-full text-center">

          {/* Animated Icon */}
          <div className="mb-8 animate-bounce">
            <span className="text-8xl">🚀</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dashboard
            <span className="text-emerald-400"> Coming Soon</span>
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
            We're building powerful analytics and insights to help you
            understand your spending habits, monitor trends, and make
            smarter financial decisions.
          </p>

          {/* Feature Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-white font-semibold mb-2">
                Expense Analytics
              </h3>
              <p className="text-slate-400 text-sm">
                Visual insights into your spending patterns.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-white font-semibold mb-2">
                Monthly Reports
              </h3>
              <p className="text-slate-400 text-sm">
                Detailed summaries of income and expenses.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">
                Budget Goals
              </h3>
              <p className="text-slate-400 text-sm">
                Set targets and track financial progress.
              </p>
            </div>

          </div>

          {/* CTA */}
          <Link
            to="/transaction"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Tracking Transactions
          </Link>

          {/* Footer Note */}
          <p className="text-slate-500 text-sm mt-8">
            New dashboard features are currently under development.
          </p>

        </div>

      </div>
    </>
  )
}

export default Dashboard