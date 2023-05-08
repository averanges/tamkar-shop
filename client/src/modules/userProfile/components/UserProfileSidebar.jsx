import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { logout } from '../../../slices/userSlice'

const UserProfileSidebar = () => {
    const dispatch = useDispatch()
    const isAuthorized = useSelector(state => state.user.isAuthorized)
    const handleLogOut = () => {
        dispatch(logout())
    }
    if(!isAuthorized){
        return <Navigate to='/login'/>
    }
  return (
    <div className='w-96 justify-center flex  border-gray-200 h-full'>
        <div className='flex flex-col gap-10 mt-10'>
        <h2 className='text-2xl'>PERSONAL CENTER</h2>
        <div className='flex gap-5 border-b-[1px] border-gray-400 hover:text-new-pink duration-500 pb-3 hover:border-new-pink'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <Link to = '/user-account' className='text-xl'>My Account</Link>
        </div>
        <div className='flex gap-5 border-b-[1px] border-gray-400 hover:text-new-pink duration-500 pb-3 hover:border-new-pink'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <Link to = '/user-account/orders' className='text-xl'>My Orders</Link>
        </div>
        <div className='flex gap-5 border-b-[1px] border-gray-400 hover:text-new-pink duration-500 pb-3 hover:border-new-pink'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
           <Link onClick={handleLogOut} to='/login'
           className='text-xl'>Log Out</Link>
        </div>
        </div>
    </div>
  )
}

export default UserProfileSidebar