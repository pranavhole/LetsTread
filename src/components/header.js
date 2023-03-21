import React from 'react'

const header = () => {
  return (
    <div className=' bg-[#1E2A55] text-white font-bold py-2 px-4 flex justify-between'>
        <div className='max-w-2xl justify-center'>logo</div>
        <div className='flex justify-center static w-full'> 
          <div className=' px-20 bg-slate-50 rounded-full text-[#216825] py-2 text-center text-2xl'>Home</div>
          </div>
    </div>
  )
}

export default header;