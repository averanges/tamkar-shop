import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLazyUserLoginOrSigninViaGoogleQuery, useLoginMutation } from '../../../services/userApiQuery'
import LoginForm from '../subComponents/LoginForm'

const LoginPage = () => {
    const [sendToken,{data}] = useLazyUserLoginOrSigninViaGoogleQuery()
    const handleCallback = (response) => {
        const token = response.credential
        // sendToken(token)
        // console.log(token)
    }
    // useEffect(() => {
    //     google.accounts.id.initialize({
    //         client_id: '708577863350-li3dauj3bmeudjtlac00o98jt6sc7tc4.apps.googleusercontent.com',
    //         callback: handleCallback
    //     })
    //     google.accounts.id.renderButton(
    //         document.getElementById('signInDiv'),
    //         {theme: 'outline', size: 'large'}
    //     )
    // },[])
  return (
    <div className='flex flex-col gap-20'>
        <div className=' flex justify-center mt-20'>
            <div className='flex flex-col gap-7 lg:w-[30%] mt-10'>
                <div className='flex justify-center'>
                    <h2 className='text-4xl'>Login</h2>
                </div>
                    <div id='signInDiv' className='w-full'></div>
                    {/* <GoogleLogin 
                    clientId="708577863350-li3dauj3bmeudjtlac00o98jt6sc7tc4.apps.googleusercontent.com"
                    buttonText="HEY LOGIN PLEASE"
                    onSuccess={(response) => console.log(response)}
                    /> */}
                    {/* <div className='flex justify-center items-center'>
                        <h5 className='text-gray-500'>or</h5>
                    </div> */}
                <div className='flex justify-center'>
                    <h2>Please enter your email and password: </h2>
                </div>
                <LoginForm/>
                <div className='flex justify-center'>
                    <h3 className='text-gray-500'>Don't have account yet? <Link to='/registration' className='text-black hover:text-new-pink duration-500'>Create one</Link></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage