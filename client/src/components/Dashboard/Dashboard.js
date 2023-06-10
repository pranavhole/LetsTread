import React from 'react'
import profile from './dashimages/profile.jpg'
import './Dashboard.css'
function Dashboard() {
    const Container = {

        background:
            "linear-gradient(89.93deg, rgba(56, 142, 60, 0) -574.96%, rgba(105, 99, 168, 0.453133) -574.88%, rgba(128, 124, 182, 0.460452) -127.91%, rgba(255, 255, 255, 0.5) 250.37%)",
        borderRadius: "50px",
        filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))",
    };
    return (
        <>
            <div className='page'>
                <div className='cover'> 
                <div>
                    <img className="profilePic" src={profile} alt="Profile not found " />
                </div>  
                </div>
            </div>
        </>
    )
}

export default Dashboard