import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/home";
import Test from "./assets/test";
// import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";

function App() {

  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/test" element={<Test/>}/>
          <Route exact path="/hero" element={<Hero/>}/>
          <Route exact path="/landing" element={<Landing/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
