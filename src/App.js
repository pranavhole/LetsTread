import "./App.css";
// import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Course1 from "./components/Courses/Course1";
import Login from "./components/Login";
import Footer from "./components/Footer";
import WithoutNav from "./components/WithoutNav";
import WithNav from "./components/WithNav";
function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <div className="flex w-screen">
    //     <Navbar />
    //     <div className=" overflow-y-scroll h-[91vh] w-full ">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/dashboard" element={<Dashboard />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/courses" element={<Courses />} />
    //         <Route path="/course1" element={<Course1 />} />
    //       </Routes>
    //       <Footer />
    //     </div>
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
      <Header />
      {/* <div className="flex w-screen"> */}
      <div className=" overflow-y-scroll h-[91vh] w-full ">
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course1" element={<Course1 />} />
          </Route>
        </Routes>
        <Footer />
      </div>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
