import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/about")
    }

  return (
    <div>
      <h1  onClick={handleClick} >Home</h1>
     
           
     
    </div>
  )
}

export default Home
