import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/home";
import Test from "./assets/test";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/test" element={<Test/>}/>
          <Route exact path="/hero" element={<Hero/>}/>
          <Route exact path="/landing" element={<Landing/>}/>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/Profile" element={<Profile/>}></Route>
          <Route exact path="/sidebar" element={<Sidebar/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
