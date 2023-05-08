import React from 'react'

const JoinUs = () => {
  return (
    <div className='w-full h-60 flex justify-around '>
        <div className='rounded-xl h-full w-full  bg-gradient-to-r from-[#f6c4ed] to-[#e1dae6] flex items-center justify-around'>
            <div className='h-full flex flex-col justify-center gap-5 flex-1 items-center'>
                <h2 className='text-3xl md:text-4xl lg:text-6xl'>Join with us</h2>
                <p className='ml-6 text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='w-5/6 lg:w-3/6 h-fit relative'>
                    <input type="text" 
                    className='border-[1px] border-solid border-bs-orange rounded-xl pl-5 py-2 w-full flex justify-start outline-none'
                    placeholder='Enter your email...'/>
                    <div className='bg-bs-orange h-full w-10 rounded-xl absolute top-0 right-0 flex justify-center items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1} className="w-6 h-6 fill-white stroke-bs-orange">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JoinUs