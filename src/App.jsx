import React from "react";
import WhyChooseUsGrid from "./components/WhyChooseUs/WhyChooseUsGrid";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Contact from "./pages/Contact/Contact";
import ApplyNow from "./pages/ApplyNow/ApplyNow";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Why Choose Us</h1>
        <p>
          At Innkeeper, we offer a unique learning experience that combines
          flexibility, expertise, and support to set you up for success
        </p>
      </header>
      <WhyChooseUsGrid />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/applyNow" element={<ApplyNow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
