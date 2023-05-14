import React from 'react'
import Logo from '../assets/Logo.png'

const arr = ['Blog','Privacy','My Account','About us','Login','FAQs', 'Contact', 'Shop'].map((el, idx) => 
    <p className='cursor-pointer hover:text-bs-orange' key={idx}>{el}</p>)

const Footer = () => {
  return (
    <div className='bg-home-gray w-full h-96 mt-20 flex justify-around items-center gap-10 px-10 text-gray-600  '>
        <div className='flex-1 gap-10 flex-col ml-16 hidden md:block'>
            <img src={Logo} alt="" className='w-4/6' />
            <p className='hidden md:inline md:text-sm lg:text-base'>The No.1 Digital Destination for
                all things K-beauty - Shopping,
                Lifestyles & Trends</p>
        </div>
        <div className='flex-1 gap-10 flex flex-col md:ml-20'>
            <h2 className='text-xl font-semibold text-black'>Information</h2>
            <div className='grid grid-cols-3 gap-5 text-sm md:text-base'>
                {arr}
            </div>
        </div>
        <div className='md:flex-1 gap-10 flex flex-col items-center'>
            <h2 className='text-xl font-semibold text-black'>Social info</h2>
            <div className='flex gap-5 mb-20'>
                <div>
                    <svg
                        viewBox="0 0 1024 1024"
                        className='fill-black w-6 h-6' 
                        >
                         <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                    </svg>
                </div>
                <div>
                    <svg
                        viewBox="0 0 1024 1024"
                        className='fill-black w-6 h-6'
                        >
                        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                    </svg>
                </div>
                <div>
                    <svg
                        viewBox="0 0 1024 1024"
                        className='fill-black w-6 h-6'
                        >
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer