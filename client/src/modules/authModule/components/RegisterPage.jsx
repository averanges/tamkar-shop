import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from '../subComponents/RegistrationForm'
import { useSignUpMutation } from '../../../services/userApiQuery'
import { Navigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux'
import { login } from '../../../slices/userSlice'

const RegisterPage = () => {
    const dispatch = useDispatch()
    const [mutation, {data, isSuccess, isLoading}] = useSignUpMutation()
    if (isSuccess && data) {
        dispatch(login(data))
        return <Navigate to='/success' />
    }
  return (
        <div className='flex flex-col gap-20 mt-20'>
            <div className='flex justify-center mt-10'>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-center'>
                        <h2 className='text-4xl'>Registration</h2>
                    </div>
                    <div className='flex justify-center'>
                        <h2>Please fill in the information below: </h2>
                    </div>
                    <RegistrationForm mutation={mutation} data={data} isLoading={isLoading} isSuccess={isSuccess}/>
                    <div className='flex justify-center'>
                        <h3 className='text-gray-500'>Already have an account? 
                        <Link to='/login' className='text-black hover:text-new-pink duration-500'> Login here.</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RegisterPage