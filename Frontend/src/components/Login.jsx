import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'
import SignUp from './SignUp'

const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const login = async (u, p) => {
        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/login",
                {
                    Email: u,
                    Pass: p
                }
            )

            localStorage.setItem(
                "token",
                res.data.token
            )

            toast.success("Login Successful 🎉")

            console.log(res.data.token)
            navigate("/home")
        } catch (err) {

            toast.error(
                err.response?.data?.detail || "Login Failed"
            )

            console.log(err.response?.data)
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="dark"
                newestOnTop
            />

            <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">

                <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8">

                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="text-slate-400 mt-2">
                            Login to your Expense Tracker account
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            login(user, pass)
                            setUser('')
                            setPass('')
                        }}
                        className="space-y-5"
                    >

                        <div>
                            <label className="block text-slate-300 mb-2 font-medium">
                                Email
                            </label>

                            <input
                                type="text"
                                placeholder="Enter Email"
                                value={user}
                                onChange={(e) => {
                                    setUser(e.target.value)
                                }}
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2 font-medium">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={pass}
                                onChange={(e) => {
                                    setPass(e.target.value)
                                }}
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            />
                        </div>
                    
                        <button onClick={()=>{

                        }}
                            type="submit"
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
                        >

                            Login
                        </button>
        

                    </form>

                    <p className="text-center text-slate-400 mt-6">
                        Not Registered?{" "}
                        <span onClick={()=>{
                            navigate("/signup")
                        }}
                            className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer"
                        >
                            Sign Up
                        </span>
                    </p>


                </div>

            </div>
        </>
    )
}

export default Login