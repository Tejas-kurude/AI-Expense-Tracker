import React from 'react'

const Home = () => {
  return (
    <div className="min-h-[100vh] bg-slate-900 text-slate-100 flex items-center justify-center px-6">

      <div className="max-w-4xl text-center">

        <h1 className="text-5xl font-bold mb-6">
          Take Control of Your
          <span className="text-emerald-400"> Finances</span>
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Track your income, monitor expenses, and gain complete visibility
          into your financial habits. Stay organized and make smarter
          financial decisions with real-time insights.
        </p>

        <p className="text-slate-400 text-md leading-relaxed mb-10">
          Whether you're managing personal spending, budgeting for goals,
          or simply keeping records of daily transactions, this Expense
          Tracker helps you stay on top of every rupee.
        </p>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300">
          Start Tracking
        </button>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-xl font-semibold text-emerald-400 mb-3">
              Track Expenses
            </h2>
            <p className="text-slate-400">
              Record and categorize all your daily expenses in one place.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-xl font-semibold text-emerald-400 mb-3">
              Monitor Income
            </h2>
            <p className="text-slate-400">
              Keep track of salary, freelance earnings, and other income sources.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-xl font-semibold text-emerald-400 mb-3">
              Visual Dashboard
            </h2>
            <p className="text-slate-400">
              Analyze spending patterns and financial growth through insights.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home