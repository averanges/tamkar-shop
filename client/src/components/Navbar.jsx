import React, { useLayoutEffect, useRef, useState } from 'react'
import Logo from '../assets/Logo.png'
import { useSelector } from 'react-redux'
import NavButtons from '../UI/navButtons/NavButtons'
import { useNavLinks } from '../modules/homeModule/hooks/useNavLinks'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const isObserved = useSelector(state => state.ui.isObserved)
    const navLinks = useNavLinks()
    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const scrollRef = useRef()
    useLayoutEffect (() => {
        window.scrollTo(0,0)
    },[location.key])
  return ( 
        <div ref={scrollRef}
        className={`w-full h-20 flex justify-between items-center duration-300 px-5 bg-transparent ${loading ? 'opacity-0' : 'opacity-100'} md:px-20
         z-10 ${ location.pathname === '/' && isObserved ? 'absolute shadow-none' : 'fixed shadow-lg bg-white'} ${(location.pathname !== '/') && 'shadow-sm'}`}>
            <div className='flex items-center gap-10' >
                <Link to='/'
                className='w-32 h-full flex justify-center items-center cursor-pointer'>
                    <img src={Logo} alt="" className='w-32 h-fit' onLoad={() => setLoading(false)}/>
                </Link>
                <div className='lg:flex gap-10 hidden ml-20'>
                    {navLinks}
                </div>
            </div>
            <div className='flex gap-3 lg:gap-10'>
                <NavButtons/>
            </div>
        </div>
  )
}

export default Navbar