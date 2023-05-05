import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Signup from "./components/Signup"

const App = () => {
  return (
   <>
    <Router>
      <Navbar/>


      <Routes>
       
        <Route  path='/' element={<Home/>} ></Route>
       <Route path='/about' element ={<About/>}></Route>
       <Route path='/contact'element={<Contact/>}></Route>
       <Route path='/skills'element={<Skills/>}></Route>
       <Route path='/contact'element={<Contact/>}></Route>
       <Route path='/signup'element={<Signup/>}></Route>
    
      </Routes>





    </Router>
   </>
  )
}

export default App
