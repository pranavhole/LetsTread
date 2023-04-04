import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {
  FaTh,
  FaHome,
  FaBars,
  FaUserAlt,
  FaBookmark,
  FaBookReader,
  FaInfoCircle
} from "react-icons/fa"
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const manuItem = [
    {
      path: '/dashboard',
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: '/',
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: '/',
      name: "MY Learning",
      icon: <FaBookmark />,
    },
    {
      path: '/courses',
      name: "Course",
      icon: <FaBookReader />,
    },
    {
      path: '/',
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: '/about',
      name: "About",
      icon: <FaInfoCircle />,
    },
  ]
  return (
    <>
      <button onClick={toggleVisibility} className=' text-white text-2xl absolute top-5 right-4 '><FaBars/></button>
      {isVisible && (
          <div className='my-6 mx-2 bg-[#1E2A55] w-28 h-full text-center rounded-3xl left-11 resNav'>
            <div className='p-5'>
              {
                manuItem.map((item, index) => (
                  <NavLink to={item.path} key={item.name} className="link" activeClassName="active" >
                    <div className='inline-block  text-3xl pt-3' >{item.icon}</div>
                    <div className=' pb-3'>{item.name}</div>
                  </NavLink>
                ))
              }
            </div>
          </div>
      )}


    </>
  )
}

export default Navbar