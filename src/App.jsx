import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./assets/home";
import Test from "./assets/test";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
