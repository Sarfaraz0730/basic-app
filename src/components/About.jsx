import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {

    const navigate = useNavigate()
    const handleABout = ()=>{
        navigate("/")
    }
   
  
  return (
    <div>
  
    
     
 <h1>Hy this is about page</h1>
    </div>
  )
}

export default About
