import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from "react-router-dom";
import { Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>} ></Route>
        {/* <Route path="/AddNewImage" element={<AddNewImage />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;