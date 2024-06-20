import React from "react"
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Courses from "./pages/Courses/Courses"
import Contact from "./pages/Contact/Contact"
import ApplyNow from "./pages/ApplyNow/ApplyNow"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import Footer from "./components/Footer/footer"


function App() {
  return (
   
   
   <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/applyNow" element={<ApplyNow />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
    </div>
  );
}

export default App;
