import React from 'react'
import home from '../images/HomePage.png'
import Dash from '../images/Dashboard.png'
import Info from '../images/Info.png'
import Course from '../images/Course.png'
import Current from '../images/Current.png'
import Profile from '../images/Profile.png'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div className='my-6 mx-2 bg-[#1E2A55] w-28 h-full text-center rounded-3xl'>
    <ul className=' justify-between inline-block'>
      <Link to="./dashboard"><li className=' items-center my-3 '>
        <div className='inline-block'><img src={Dash} alt='Home' /></div>
        <div className='text-white'>Dashboard</div></li></Link>
        <Link to="./"><li className='items-center my-3 '>
        <div className='inline-block'><img src={home} alt='Home' /></div>
        <div className='text-white'>Home</div></li></Link>
        <Link to="./courses"><li className='items-center my-3 '>
        <div className='inline-block'><img src={Course} alt='Home' /></div>
        <div className='text-white'>Courses</div></li></Link>
        <Link to="./"><li className='items-center my-3 '>
        <div className='inline-block'><img src={Current} alt='Home' /></div>
        <div className='text-white'>My Learning</div></li></Link>
        <Link to="./"><li className='items-center my-3 '>
        <div className='inline-block'><img src={Profile} alt='Home' /></div>
        <div className='text-white'>Profile</div></li></Link>
        <Link to="./about"><li className='items-center my-3 '>
        <div className='inline-block'><img src={Info} alt='Home' /></div>
        <div className='text-white'>About</div></li></Link>
    </ul>
  </div>
  
  )
}

export default navbar