import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { useLocation } from 'react-router-dom'
const Header = () => {
  const location = useLocation();
  
  function my() {
    console.log(location.pathname);
    if(location.pathname==='/'){
      return("Home")
    }
    
  }  
  return (
    <div className=' bg-[#1E2A55] text-white font-bold py-2 px-4 flex justify-between'>
      <Link to='/'><img src={logo} className="h-12" alt="logo" /></Link>
      <div className='flex justify-center static w-full'>
        <div className=' px-20 bg-slate-50 rounded-full text-[#216825] py-2 text-center text-2xl'>{my}{}</div>
      </div>
    </div>
  )
}

export default Header;