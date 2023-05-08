import React from 'react'
import UserProfileSidebar from './UserProfileSidebar'
import { Outlet } from 'react-router-dom'

const UserProfileLayout = () => {
  return (
    <div className='w-screen h-screen flex mt-20'>
        <UserProfileSidebar/>
        <Outlet />
    </div>
  )
}

export default UserProfileLayout