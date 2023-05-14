import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HairCare } from '../hooks/navPopup'

const NavLinkText = ({name, link}) => {
    const [hovering, setHovering] = useState()
  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
className={` font-medium font-serif relative`}>
    <div className=' flex gap-2 items-center hover:text-bs-orange cursor-pointer'>
        <Link to={link}>{name}</Link>
        { (name !== 'New' && name !== 'Sales') &&
        (<div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>)}
    </div>
    <div className='absolute w-fit h-fit top-6 bg-white shadow-xl z-20'>
            {(name === 'Shop' && hovering) &&
            <div className='flex flex-col px-10 gap-5 py-3 text-sm min-w-[5rem]'>
                <HairCare/>
            </div>    
            }
    </div>
</div>
  )
}

export default NavLinkText