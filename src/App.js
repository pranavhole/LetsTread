import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";

import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex w-screen">
        <Navbar />
        <div className=" overflow-y-scroll h-[91vh] w-full ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
          <Footer />
        </div>
        
      </div>
      
      
    </BrowserRouter>
  );
}

export default App;
