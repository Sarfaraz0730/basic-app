import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {

    const navigate = useNavigate()
    const handleABout = ()=>{
        navigate("/home")
    }
   
  
  return (
    <div>
      <h1  onClick={handleABout} >About </h1>
    
     
      Ea magni reiciendis ipsa, at fuga modi eaque quod perferendis id assumenda, quae repudiandae non asperiores culpa inventore architecto velit illo voluptas autem debitis. Magnam doloribus ratione deserunt saepe. Impedit?
      
    </div>
  )
}

export default About
