import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {

    const navigate = useNavigate()
    const handleABout = ()=>{
        navigate("/")
    }
   
  
  return (
    <div>
  
    
     
About Page
    </div>
  )
}

export default About
