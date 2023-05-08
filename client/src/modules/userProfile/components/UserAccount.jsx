import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAccountInfoQuery } from '../../../services/userApiQuery'
import { openAddNewAddress } from '../../../slices/uiSlice'

const UserAccount = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.user.authToken)
  const { data } = useGetAccountInfoQuery({token})
  const getHiddenEmail = () => {
    const email = data?.email.split('')
    const atIndex  = email?.indexOf('@')
    const modifiedEmail = email?.slice(0, 2) + '*'.repeat(atIndex - 2) + email?.slice(atIndex);
    return modifiedEmail?.split(',').join('')
  }
  return (
    <>
    <div className='w-full mt-10 flex-col flex gap-10'>
      <div className='w-full flex border-b-[1px] border-gray-200 pb-5'>
        <div className='flex-1 flex items-center flex-col gap-10'>
          <h4 className='text-2xl'>INFORMATION</h4>
          <div className='flex flex-col w-[60%] gap-10'>
            <div className='flex flex-col gap-4'>
              <h5 className='text-base font-semibold'>EMAIL</h5>
              <p className='text-sm'>{getHiddenEmail()}</p>
              <button className='bg-white border-[1px] border-black w-3/6 h-10 hover:bg-black hover:text-white duration-500'>CHANGE</button>
            </div>
          </div>
        </div>
        <div className='flex-1 flex-col flex items-center gap-10'>
          <h4 className='text-2xl'>MY ADDRESS BOOK</h4>
          <div>
            <p>You haven't specified delivery addresses yet!</p>
          </div>
          <button onClick={() => dispatch(openAddNewAddress(true))}
          className='bg-black text-white h-10 px-5 hover:opacity-70'>+ ADD NEW ADDRESS</button>
        </div>
      </div>
         <div className='flex justify-around border-b-[1px] border-gray-200 pb-10 items-center pr-16'>
          <div className='flex gap-5'>
              <h5 className='text-base font-semibold'>PASSWORD</h5>
              <p className='text-sm'>*********</p>
          </div>
          <p></p>
            <button className='bg-white border-[1px] border-black w-1/6 h-10 hover:bg-black hover:text-white duration-500'>CHANGE</button>
          </div>
    </div>
    </>
  )
}

export default UserAccount