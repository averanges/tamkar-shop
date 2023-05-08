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
    <div className='absolute w-fit h-fit top-6 bg-white shadow-xl'>
            {(name === 'Hair Care' && hovering) &&
            <div className='flex flex-col px-10 gap-5 py-3 text-sm min-w-[5rem]'>
                <HairCare/>
            </div>    
            }
            {(name === 'Body Care' && hovering) &&
            <div className='flex flex-col px-10 gap-5 py-3 text-sm min-w-[5rem]'>
                <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>ALL BODY CARE</Link>
                <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>DEODORANT</Link>
                <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>HAND & FOOT CARE</Link>
                <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>NAIL CARE</Link>
                <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>BODY CLEANSER</Link>
            </div>
            }
            {(name === 'Skin Care' && hovering) &&
            <div className='flex px-10 gap-14 py-3 text-sm'>
                <div className='flex flex-col gap-5 flex-1 min-w-[5rem]'>
                    <Link className='border-b-[1px] border-black font-semibold'>BASIC CARE</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>ALL BASIC CARE</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>SKIN/TONER/BOOSTER</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>LOTION/EMULSION</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>ESSENCE/SERUM/OIL</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>CREAM</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>EYE CREAM</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>MIST/SUN CARE</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>SPECIAL CARE</Link>
                </div>
                <div className='flex flex-col gap-5 flex-1 min-w-[5rem]'>
                    <Link className='border-b-[1px] border-black font-semibold'>CLEANSING</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>ALL CLEANSING</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>CLEANSING FOAM</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>CLEANSING CREAM</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>CLEANSING WATER</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>CLEANSING OIL</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>PEELING/SCRUB</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>SOAP</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>CLEANSING TOOLS</Link>
                </div>
                <div className='flex flex-col gap-5 flex-1 min-w-[5rem]'>
                    <Link className='border-b-[1px] border-black font-semibold'>PACK & MASK</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>ALL PACK & MASK</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>SLEEPING MASK</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>MASK SHEET</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>WASH-OFF/PEEL-OFF</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>PEELING</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>NOSE PACK</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>EYE PATCH</Link>
                </div>
            </div>
            }
            {(name === 'Makeup' && hovering) &&
            <div className='flex px-10 gap-14 py-3 text-sm'>
                <div className='flex flex-col gap-5 flex-1 min-w-[5rem]'>
                    <Link className='border-b-[1px] border-black font-semibold'>FACE MAKEUP</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>ALL FACE MAKEUP</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>PRIMER</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>BB/CC CREAM</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>MAKEUP BASE</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>FOUNDATION/<br/>CONCEALER</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>CUSHION</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>POWDER/PACT</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>BLUSHER/HIGHLIGHTER/<br/>SHADING</Link>
                </div>
                <div className='flex flex-col gap-5 flex-1 min-w-[5rem]'>
                    <Link className='border-b-[1px] border-black font-semibold'>LIP MAKEUP</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>ALL LIP MAKEUP</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>LIPSTICK</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>TINT</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>LIP TREATMENT</Link>
                </div>
                <div className='flex flex-col gap-5 flex-1 min-w-[5rem]'>
                    <Link className='border-b-[1px] border-black font-semibold'>EYE MAKEUP</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>ALL EYE MAKEUP</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>EYE SHADOW</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>EYELINER</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>EYEBROW</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>MASCARA</Link>
                    <Link className='cursor-pointer hover:text-bs-orange hover:border-bs-orange'>MAKEUP TOOLS</Link>
                </div>
            </div>
            }
        </div>
</div>
  )
}

export default NavLinkText