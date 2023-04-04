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
import Registration from "./components/Home/registration";
// import Navbar from "./components/navbar";
import Login from "./components/Login";
// import Footer from "./components/Footer";
// import WithoutNav from "./components/WithoutNav";
// import WithNav from "./components/WithNav";
function App(props) {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/"  element={<HomeMain name={props.name} />} >
          <Route path=""  element={<Home/>}/>
          <Route path="dashboard"  element={<Dashboard />} />
          <Route path="about"  element={<About />} />
          <Route path="courses"  element={<Courses />} />
          <Route path="course1" element={<Course1 />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
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
