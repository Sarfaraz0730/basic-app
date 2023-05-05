import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/about")
    }
    const contactClick =()=>{
        navigate("/contact")
    }

  return (
    <div>
   Home page
           
     
    </div>
  )
}

export default Home
