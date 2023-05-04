import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {

    const navigate = useNavigate()
    const handleABout = ()=>{
        navigate("/")
    }
   
  
  return (
    <div>
  
    
     
      <h5>Hy this is ABout page</h5>
      <button onClick={handleABout}>Go to Home page</button>
    </div>
  )
}

export default About
