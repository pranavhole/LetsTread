import "./App.css";

import { useState } from "react";
import Home from "./components/Home/Home";
import HomeMain from "./HomeMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Course1 from "./components/Courses/Course1";
import RegistrationForm from "./components/Home/registration";
import MyCoursesPage from "./components/myLearning/MyLearning"
import Login from "./components/Login";
import StockChart from "./components/myLearning/Treadcanvas/Treadcanvas";
import DiscussionSection from "./components/discussion/discussion";
import CommentSection from "./components/discussion/discussion";
// import Comments from "./components/discussion/Comment"
// import Views from "./videos/view"

function App() {
  const [user,setLoginUser]=useState({});
  const handleData=(data)=>{
    setLoginUser(data);
  }
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/"  element={<HomeMain />} >
          <Route path=""  element={<Home/>}/>
          <Route path="dashboard" element={
              user && user._id ? <Dashboard data={user}/> : <Login onhandleData={handleData}/>
            }/>
      
          <Route path="about"  element={<About />} />
          <Route path="courses"  element={<Courses />} />
          <Route path="/Mylearning" element={<MyCoursesPage />} />
          <Route path="course1" element={<Course1 />} />
          <Route path="Discussion" element={<DiscussionSection/>}/>
          <Route path="/reg" element={<RegistrationForm />} />
          <Route path='/tread' element={<StockChart/>} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="Comments" element={<Comments commentsUrl="http://localhost:3004/comments" */}
        {/* currentUserId="1"/>}/> */}
        </Route>
               
        {/* <Route path='/view' element={<Views/>}/> */}
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
