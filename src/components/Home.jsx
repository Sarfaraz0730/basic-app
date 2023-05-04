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
      <h1  onClick={handleClick} >About pe jao</h1>
   <h5>Hy this is Home page I welcome you</h5>
   <button onClick={handleClick}>Go to about page</button>
   <button onClick={contactClick} > Go to contact page </button>
           
     
    </div>
  )
}

export default Home
