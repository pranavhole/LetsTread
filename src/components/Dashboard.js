import React from 'react'
import profile from '../images/Profile.png'
function Dashboard() {
    const Container = {

        background:
            "linear-gradient(89.93deg, rgba(56, 142, 60, 0) -574.96%, rgba(105, 99, 168, 0.453133) -574.88%, rgba(128, 124, 182, 0.460452) -127.91%, rgba(255, 255, 255, 0.5) 250.37%)",
        borderRadius: "50px",
        filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))",
    };
    return (
        <>
            <div className='flex justify-around flex-wrap-reverse'>
                <div style={Container} className='flex flex-col items-center rounded-[34px] h-fit p-6 w-[41%] m-4 min-w-[400px]'>
                    <div>Your Recent Sales</div>
                    <div className='flex flex-col w-[-webkit-fill-available]'>
                        <div className=" w-[-webkit-fill-available]  flex items-center justify-between bg-white rounded-lg shadow-lg p-6 m-4">
                            <div className=''>Allu arjun</div>
                            <div>
                                <div>
                                    Rs 2000
                                </div>
                                <dib>
                                    21/jan/2023
                                </dib>
                            </div>

                        </div>
                        <div className=" w-[-webkit-fill-available] flex items-center justify-between bg-white rounded-lg shadow-lg p-6 m-4">
                            <div className=''>Allu arjun</div>
                            <div>
                                <div>
                                    Rs 2000
                                </div>
                                <dib>
                                    21/jan/2023
                                </dib>
                            </div>

                        </div>
                    </div>
                    <div><spam>See more</spam></div>
                </div>
                <div style={Container} className=' rounded-[34px] w-[41%] m-4 min-w-[400px]'>
                    <div className='flex flex-col  justify-center items-center'>
                        <div className=' contents'>
                            <img alt="abc"
                                className='w-[100px]'
                                src={profile}

                            />
                        </div>
                        <h2>name</h2>
                    </div>
                    <div className='flex flex-col content-center'>
                        <div>Ref. ID:</div>
                        <div>Pranavhole050610@gmail.com</div>
                    </div>
                    <div>
                            <div className='flex flex-col content-center  bg-white rounded-lg shadow-lg p-6 m-4 items-center w-[41%] min-w-[120px] '>
                                <div><h1> Rs-500</h1></div>
                                <div><span>Today Earning</span></div>
                            </div>
                            <div className='flex flex-col content-center  bg-white rounded-lg shadow-lg p-6 m-4 items-center w-[41%] min-w-[120px] '>
                                <div><h1> Rs-500</h1></div>
                                <div><span>Today Earning</span></div>
                            </div>
                                
                            
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default Dashboard