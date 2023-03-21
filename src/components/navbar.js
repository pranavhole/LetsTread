import React from 'react'
import home from '../images/HomePage.png'
import Dash from '../images/Dashboard.png'
import Info from '../images/Info.png'
import Course from '../images/Course.png'
import Current from '../images/Current.png'
const navbar = () => {
  return (
    <div className='my-6 mx-2 bg-[#1E2A55] w-28 text-center rounded-3xl'>
      <ul className=' justify-between inline-block'>
        <li className=' items-center my-6 py-3'>
          <img src={Dash} alt='Home' />
          <span>Home</span></li>
        <li className='items-center my-6 py-3'>
          <img src={home} alt='Home' />
          <span>Home</span></li>
        <li className='items-center my-6 py-3'>
          <img src={Course} alt='Home' />
          <span>Home</span></li>
        <li className='items-center my-6 py-3'>
          <img src={Current} alt='Home' />
          <span>Home</span></li>
        <li className='items-center my-6 py-3'>
          <img src={Info} alt='Home' />
          <span>Home</span></li>
      </ul>
    </div>
  )
}

export default navbar