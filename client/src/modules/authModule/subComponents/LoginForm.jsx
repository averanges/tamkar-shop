import { Field, Form, Formik } from "formik"
import { loginValidationSchema } from "../consts/validationSchema"
import useHandleForm from "../hooks/useHandleForm"
import { useLoginMutation } from "../../../services/userApiQuery"
import ClipLoader from 'react-spinners/ClipLoader'
import { Navigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { login } from "../../../slices/userSlice"

const LoginForm = () => {
  const dispatch = useDispatch()
  const [mutation, { data, isLoading, isSuccess }] = useLoginMutation()
    const {onBlurOn, placeholders, handleBlur, handleFocus} = useHandleForm()
    useEffect(() => {
      if (isSuccess && data){
        dispatch(login(data))
      }
    }, [isSuccess])
    if (isSuccess && data) {
      return <Navigate to='/user-account' />
    }
    return (
      <div>
          <Formik 
          initialValues={{ email: '', psw: ''}}
          validationSchema={loginValidationSchema} 
          validateOnBlur
          onSubmit={values => mutation(values)}
          >
              {({errors}) => (                
              <Form className='flex flex-col gap-5'>
                  <Field 
                    type='text' 
                    name='email'
                    placeholder={placeholders.email}
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                    className={`h-12 border-[1px] pl-5 outline-none 
                    ${onBlurOn.email && errors.email ? 'border-red-600' : 'border-gray-300'}`}  
                  />
                  {onBlurOn.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                  <Field 
                    type='password' 
                    name='psw'
                    placeholder={placeholders.psw}
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                    className={`h-12 border-[1px] pl-5 outline-none 
                    ${onBlurOn.psw && errors.psw ? 'border-red-600' : 'border-gray-300'}`}   
                  />
                  {onBlurOn.psw && errors.psw && <p className='text-red-500'>{errors.psw}</p>}
                  <button type="submit" className='h-14 border-[1px] border-gray-500 text-xl hover:bg-new-pink hover:text-white duration-500'>
                  {isLoading ? <ClipLoader/> : <p>Login</p>}</button>
              </Form>
              )}
          </Formik>
      </div>
    )
}

export default LoginForm