import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaTh,
  FaHome,
  // FaBars,
  FaUserAlt,
  FaBookmark,
  FaBookReader,
  FaInfoCircle
} from "react-icons/fa"
const Navbar = () => {
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
    <nav>
    <div className='my-6 mx-2 bg-[#1E2A55] w-28 h-full text-center rounded-3xl'>
      <div className='p-5'>
        {
          manuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active" >
              <div className='inline-block  text-4xl pt-3' >{item.icon}</div>
              <div className=' pb-5'>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
    </div>
    </nav>
  
  )
}

export default Navbar