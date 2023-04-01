import React from 'react'

function feedback(props) {
  
  return (
    <div className=''>
      <div className="flex justify-center">
        <div class="flex items-center px-5">
          <img
            src={props.profile}
            className="rounded-2xl w-30"
            alt=""
          />
        </div>
        <div className="flex py-25">
          <div className="py-3 w-[39rem]">
            <h1 className=" flex text-3xl text-black font-bold">{props.name}
            </h1>
            <p className="py-5 w-[-webkit-fill-available] h-[-webkit-fill-available] not-italic font-medium ">
              {props.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default feedback;