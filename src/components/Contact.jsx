import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const handleHome =()=>{
        navigate("/")
    }
  return (
    <div>
Contact page
    </div>
  )
}

export default Contact
