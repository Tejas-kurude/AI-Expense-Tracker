import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Profile = () => {

    const [data, setdata] = useState({})
    const [visible, setvisible] = useState(false)
    const [change, setchange] = useState({})

    const token = localStorage.getItem("token")

    const response = async () => {
        try {

            const res = await axios.get(
                "http://127.0.0.1:8000/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setdata(res.data)
            setchange(res.data)

        } catch (err) {

            toast.error(
                err.response?.data?.detail || "Failed to Load Profile"
            )

        }
    }

    const update = async () => {
        try {

            await axios.patch(
                "http://127.0.0.1:8000/updateprofile",
                {
                    F_Name: change.F_Name,
                    L_Name: change.L_Name,
                    Email: change.Email
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setdata(change)

            toast.success("Profile Updated Successfully 🎉")

        } catch (err) {

            toast.error(
                err.response?.data?.detail || "Update Failed"
            )

        }
    }

    useEffect(() => {
        response()
    }, [])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="dark"
                newestOnTop
            />

            <Navbar />

            {/* Edit Profile Modal */}
            {visible && (

                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8">

                        <h2 className="text-2xl font-bold text-white text-center mb-6">
                            Edit Profile
                        </h2>

                        <div className="space-y-4">

                            <input
                                type="text"
                                placeholder="First Name"
                                value={change.F_Name || ""}
                                onChange={(e) => {
                                    setchange({
                                        ...change,
                                        F_Name: e.target.value
                                    })
                                }}
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />

                            <input
                                type="text"
                                placeholder="Last Name"
                                value={change.L_Name || ""}
                                onChange={(e) => {
                                    setchange({
                                        ...change,
                                        L_Name: e.target.value
                                    })
                                }}
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={change.Email || ""}
                                onChange={(e) => {
                                    setchange({
                                        ...change,
                                        Email: e.target.value
                                    })
                                }}
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />

                            <div className="flex gap-4 pt-2">

                                <button
                                    onClick={async () => {
                                        await update()
                                        setvisible(false)
                                    }}
                                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition"
                                >
                                    Save Changes
                                </button>

                                <button
                                    onClick={() => {
                                        setchange(data)
                                        setvisible(false)
                                    }}
                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
                                >
                                    Cancel
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

            {/* Profile Section */}
            <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-10">

                <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8">

                    <div className="flex justify-between items-center mb-8">

                        <h1 className="text-4xl font-bold text-white">
                            Profile
                        </h1>

                        <button
                            onClick={() => {
                                setchange(data)
                                setvisible(true)
                            }}
                            className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-lg text-white font-semibold shadow-lg transition"
                        >
                            Edit Profile
                        </button>

                    </div>

                    <div className="space-y-5">

                        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition">
                            <p className="text-slate-400 text-sm">
                                First Name
                            </p>

                            <h2 className="text-white text-xl font-semibold">
                                {data.F_Name}
                            </h2>
                        </div>

                        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition">
                            <p className="text-slate-400 text-sm">
                                Last Name
                            </p>

                            <h2 className="text-white text-xl font-semibold">
                                {data.L_Name}
                            </h2>
                        </div>

                        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition">
                            <p className="text-slate-400 text-sm">
                                Email
                            </p>

                            <h2 className="text-white text-xl font-semibold break-all">
                                {data.Email}
                            </h2>
                        </div>

                        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition">
                            <p className="text-slate-400 text-sm">
                                Account Status
                            </p>

                            <h2 className="text-emerald-400 text-xl font-semibold">
                                Active
                            </h2>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile