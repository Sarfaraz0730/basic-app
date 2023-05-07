import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const handleHome =()=>{
        navigate("/")
    }
  return (
    <div>
<h4>This is Contact page</h4>
    </div>
  )
}

export default Contact
