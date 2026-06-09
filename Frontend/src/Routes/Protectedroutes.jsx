import React from 'react'
import { jwtDecode } from "jwt-decode"
import { Navigate } from 'react-router-dom'

const Protectedroutes = ({ children }) => {


    const token = localStorage.getItem("token")

    if(!token) return <Navigate to="/login" state={{
        message:"Session Expired...!"
    }} replace />   

    try{
        const decoded = jwtDecode(token)

        if(decoded.exp*1000 < Date.now()) {
            localStorage.removeItem("token")
            return <Navigate to = "/login" state={{
                message:"Session Expired...!"
            }} replace />
        }
    }
    catch{
        localStorage.removeItem("token")
            return  <Navigate to = "/login" state={{
                message:"Please Login Again "
            }} replace />

    }


  return children
}

export default Protectedroutes
