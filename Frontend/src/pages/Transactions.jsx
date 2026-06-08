import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Transactions = () => {

  const [data, setdata] = useState([])
  const [date, setdate] = useState("")
  const [Spend, setSpend] = useState("")
  const [For, setFor] = useState("")
  const [visible, setvisible] = useState(false)
  const [editid, seteditid] = useState(null)

  const token = localStorage.getItem("token")

  const response = async () => {
    const res = await axios.get('http://localhost:8000/showtransactions', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setdata(res.data)

  }


  const addtran = async () => {
    const a = await axios.post("http://localhost:8000/transactions",
      {
        Date: date,
        Spend,
        For,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    )
  }


  const remtran = async (id) => {
    const b = await axios.delete(`http://localhost:8000/deletetransaction?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    )
  }


  const update = async (id) => {
    const c = await axios.patch(`http://localhost:8000/updatetransaction?id=${id}`,
      {
        Date: date,
        Spend,
        For,

      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }


    )

  }

  useEffect(() => {
    response()

  }, [])





return (
  <>
  <Navbar/>
    {visible && (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">

          <h2 className="text-2xl font-bold text-white mb-6">
            {editid ? "Update Transaction" : "Add Transaction"}
          </h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault()

              if (editid) {
                await update(editid)
              } else {
                await addtran()
              }

              await response()

              setdate("")
              setSpend("")
              setFor("")
              setvisible(false)
              seteditid(null)
            }}
            className="space-y-4"
          >

            <input
              type="text"
              placeholder="Date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="number"
              placeholder="Amount"
              value={Spend}
              onChange={(e) => setSpend(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="text"
              placeholder="Purpose"
              value={For}
              onChange={(e) => setFor(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div className="flex gap-3">

              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition"
              >
                {editid ? "Update" : "Add"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setvisible(false)
                  seteditid(null)
                }}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>
    )}

    <div className="min-h-screen bg-slate-900 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-8">
          Transactions
        </h1>

        <div className="space-y-4">

          {data.map((elem) => (
            <div
              key={elem.id}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between"
            >

              <div className="space-y-2">

                <p className="text-slate-300">
                  <span className="text-emerald-400 font-semibold">
                    Date:
                  </span>{" "}
                  {elem.Date}
                </p>

                <p className="text-slate-300">
                  <span className="text-emerald-400 font-semibold">
                    Amount:
                  </span>{" "}
                  ₹{elem.Spend}
                </p>

                <p className="text-slate-300">
                  <span className="text-emerald-400 font-semibold">
                    Purpose:
                  </span>{" "}
                  {elem.For}
                </p>

              </div>

              <div className="flex gap-3 mt-4 md:mt-0">

                <button
                  type="button"
                  onClick={() => {
                    setvisible(true)
                    setdate(elem.Date)
                    setSpend(elem.Spend)
                    setFor(elem.For)
                    seteditid(elem.id)
                  }}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition"
                >
                  Update
                </button>

                <button
                  type="button"
                  onClick={async () => {
                    await remtran(elem.id)
                    await response()
                  }}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-medium transition"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

      <button
        onClick={() => {
          seteditid(null)
          setdate("")
          setSpend("")
          setFor("")
          setvisible(true)
        }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full shadow-2xl font-bold transition"
      >
        + Add Transaction
      </button>

    </div>
  </>
)
}

export default Transactions
