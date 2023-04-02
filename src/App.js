import "./App.css";
// import Navbar from "./components/navbar";
// import Header from "./components/header";
import Home from "./components/Home/Home";
import HomeMain from "./HomeMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Course1 from "./components/Courses/Course1";
// import Navbar from "./components/navbar";
import Login from "./components/Login";
// import Footer from "./components/Footer";
// import WithoutNav from "./components/WithoutNav";
// import WithNav from "./components/WithNav";
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" Key="Home" element={<HomeMain />} >
          <Route path="" key="Home" element={<Home/>}/>
          <Route path="dashboard" key="Dashboard" element={<Dashboard />} />
          <Route path="about" key="About" element={<About />} />
          <Route path="courses" key="Courses" element={<Courses />} />
          <Route path="course1" element={<Course1 />} />
          <Route path="login" key="Login" element={<Login />} />
        </Route>
        <Route path="login" key="Login" element={<Login />} />
      </Routes>


    </BrowserRouter>

    //   <BrowserRouter>
    //   <Header />
    //   {/* <div className="flex w-screen"> */}
    //   <div className=" overflow-y-scroll h-[91vh] w-full ">
    //     <Routes>
    //       <Route element={<WithoutNav />}>
    //         <Route path="/login" element={<Login />} />
    //       </Route>
    //       <Route element={<WithNav />}>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/dashboard" element={<Dashboard />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/courses" element={<Courses />} />
    //         <Route path="/course1" element={<Course1 />} />
    //       </Route>
    //     </Routes>
    //     <Footer />
    //   </div>
    //   {/* </div> */}
    // </BrowserRouter>
  );
}

export default App;
