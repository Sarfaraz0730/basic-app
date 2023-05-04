import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const handleHome =()=>{
        navigate("/")
    }
  return (
    <div>
      <h1>Contact </h1>
      <h5>Hi this contact page </h5>
      <button onClick={handleHome} >Go to home page</button>
    </div>
  )
}

export default Contact
