import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../subComponents/LoginForm'

const LoginPage = () => {
  return (
    <div className='flex flex-col gap-20'>
        <div className=' flex justify-center mt-20'>
            <div className='flex flex-col gap-7 lg:w-[30%] mt-10'>
                <div className='flex justify-center'>
                    <h2 className='text-4xl'>Login</h2>
                </div>
                    <div id='signInDiv' className='w-full'></div>
                <div className='flex justify-center'>
                    <h2>Please enter your email and password: </h2>
                </div>
                <LoginForm/>
                <div className='flex justify-center'>
                    <h3 className='text-gray-500'>Don&#39;t have account yet? <Link to='/registration' className='text-black hover:text-new-pink duration-500'>Create one</Link></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage