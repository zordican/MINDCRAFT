import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./assets/home";
import Test from "./assets/test";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
