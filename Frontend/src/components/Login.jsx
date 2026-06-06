import React, { useState } from 'react'
import axios from 'axios'
const login = () => {

    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")

    


  return (
    <>


        <form>

        <input type="text" placeholder='Enter User name' value={user} onChange={(e)=>{
            setUser(e.target.value)
        }} />
        <input type="password" placeholder='Enter Password'  value={pass} onChange={(e)=>{
            setPass(e.target.value)
        }} ></input>
        <button>LogIn</button>


        </form>



    </>
  )
}

export default login
