import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";



function App() {

  return (
    <>
      <BrowserRouter>
     
        <Routes>
          <Route exact path="/" element={<Landing Page/>}/>
          <Route exact path="/hero" element={<Hero/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
