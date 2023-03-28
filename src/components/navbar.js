import React from 'react'
import home from '../images/HomePage.png'
import Dash from '../images/Dashboard.png'
import Info from '../images/Info.png'
import Course from '../images/Course.png'
import Current from '../images/Current.png'
import Profile from '../images/Profile.png'
const navbar = () => {
  return (
<<<<<<< HEAD
    <div className='my-6 mx-2 bg-[#1E2A55] min-w-[50px] w-[7%] h-fit text-center rounded-3xl'>
      <ul className=' justify-between inline-block'>
        <li className=' items-center my-6 py-3'>
=======
    <div className='my-6 mx-2 bg-[#1E2A55] w-28 text-center rounded-3xl flex items-stretch'>
      <ul className='justify-between inline-block'>
        <li className='flex-1 text-center items-center my-6 py-3'>
>>>>>>> 8d9dacad8419c4f5304c0c0d86587cb286f86a42
          <img src={Dash} alt='Home' />
          <span className='text-white'>Dashboard</span></li>
        <li className='flex-1 text-center items-center my-6 py-3 '>
          <img src={home} alt='Home' />
          <span className='text-white'>Home</span></li>
        <li className='flex-1 text-center items-center my-6 py-3 '>
          <img src={Course} alt='Home' />
          <span className='text-white'>Course</span></li>
        <li className='flex-1 text-center items-center my-6 py-3 '>
          <img src={Current} alt='Home' />
          <span className='text-white'>My learning</span></li>
        <li className='flex-1 text-center items-center my-6 py-3 '>
          <img src={Profile} alt='Home' />
          <span className='text-white'>Profile</span></li>
        <li className='flex-1 text-center items-center my-6 py-3 '>
          <img src={Info} alt='Home' />
          <span className='text-white'>About</span></li>
      </ul>
    </div>
  )
}

export default navbar