import React from 'react'
import success from '../../../assets/success.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetAccountInfoQuery } from '../../../services/userApiQuery'

const SuccessBlock = () => {
    const token = useSelector(state => state.user.authToken)
    const { data } = useGetAccountInfoQuery({token})
        console.log(data)
  return (
    <div className='flex justify-center w-screen h-screen mt-20 '>
        <div className='w-2/6 flex items-center flex-col gap-5 mt-20'>
            <img src={success} alt="" className='w-16 h-16'/>
            <h2 className='text-lg'>Congratulations, {data?.name}! You have successfully registered!</h2>
            <div className='w-full flex justify-between items-center'>
                <Link 
                to='/shop' className='text-white bg-new-pink h-14 w-2/6 flex justify-center items-center'>SHOP NOW</Link>
                <p className='text-gray-500'>or</p>
                <Link to='/user-account' 
                className='text-black bg-white border-[1px] border-black h-14 w-2/6 flex justify-center hover:bg-black hover:text-white duration-500 items-center'>USER ACCOUNT</Link>
            </div>
        </div>
    </div>  
  )
}

export default SuccessBlock