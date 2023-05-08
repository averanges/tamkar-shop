import React from 'react'
import event1 from '../../../assets/event1.png'
import event2 from '../../../assets/event2.png'
import event3 from '../../../assets/event3.png'

const Events = () => {
  return (
    <div className='flex flex-row items-center w-full h-fit mt-10 justify-around gap-5'>
        <div className='w-fit h-fit flex justify-center items-center relative group/control overflow-hidden rounded-xl cursor-pointer'>
            <div className='w-full h-full absolute z-10 opacity-10'>
                <div className='bg-white w-full h-10 scale-150 translate-y-10 -translate-x-80 -rotate-45 
                group-hover/control:translate-x-80 group-hover/control:translate-y-80 duration-1000 '/>
                <div className='bg-white w-full h-10 scale-150 -rotate-45 translate-y-96 translate-x-60
                group-hover/control:-translate-x-80 group-hover/control:-translate-y-40 duration-1000 '/>
            </div>
            <img className='rounded-xl cursor-pointer duration-500 group-hover/control:scale-105' src={event1} alt="" />
        </div>
        <div className='w-fit h-fit relative group/control overflow-hidden rounded-xl cursor-pointer'>
            <div className='w-full h-full absolute z-10 opacity-10'>
                <div className='bg-white w-full h-10 scale-150 translate-y-10 -translate-x-80 -rotate-45 
                group-hover/control:translate-x-80 group-hover/control:translate-y-80 duration-1000 '/>
                <div className='bg-white w-full h-10 scale-150 -rotate-45 translate-y-96 translate-x-60
                group-hover/control:-translate-x-80 group-hover/control:-translate-y-40 duration-1000 '/>
            </div>
            <img className='rounded-xl cursor-pointer duration-500 group-hover/control:scale-105' src={event2} alt="" />
        </div>
        <div className='w-fit h-fit relative group/control overflow-hidden rounded-xl cursor-pointer'>
            <div className='w-full h-full absolute z-10 opacity-10'>
                <div className='bg-white w-full h-10 scale-150 translate-y-10 -translate-x-80 -rotate-45 
                group-hover/control:translate-x-80 group-hover/control:translate-y-80 duration-1000 '/>
                <div className='bg-white w-full h-10 scale-150 -rotate-45 translate-y-96 translate-x-60
                group-hover/control:-translate-x-80 group-hover/control:-translate-y-40 duration-1000 '/>
            </div>
            <img className='rounded-xl cursor-pointer duration-500 group-hover/control:scale-105' src={event3} alt="" />
        </div>
    </div>
  )
}

export default Events