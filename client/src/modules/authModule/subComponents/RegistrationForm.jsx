import { Field, Form, Formik } from "formik"
import { registerValidationSchema } from "../consts/validationSchema"
import useHandleForm from "../hooks/useHandleForm"
import ClipLoader from 'react-spinners/ClipLoader'


const RegistrationForm = ({mutation, isLoading}) => {
  const {onBlurOn, placeholders, handleBlur, handleFocus} = useHandleForm()
  
    return (
      <div>
          <Formik 
          initialValues={{name: '', email: '', psw: '', confirmPsw: ''}}
          validationSchema={registerValidationSchema} 
          validateOnBlur
          onSubmit={values => mutation(values)}
          >
              {({errors}) => (                
              <Form className='flex flex-col gap-5 w-96'>
                  <Field 
                    type='text' 
                    name='name'
                    placeholder={placeholders.name} 
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                    className={`h-12 border-[1px] pl-5 outline-none 
                    ${onBlurOn.name && errors.name ? 'border-red-600' : 'border-gray-300'}`}  
                  />
                  {onBlurOn.name && errors.name ? (<p className='text-red-500'>{errors.name}</p>) : null}
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
                  <Field 
                    type='password' 
                    name='confirmPsw'
                    placeholder={placeholders.confirmPsw}
                    onFocus={(e) => handleFocus(e)}
                    onBlur={(e) => handleBlur(e)}
                    className={`h-12 border-[1px] pl-5 outline-none 
                    ${onBlurOn.confirmPsw && errors.confirmPsw ? 'border-red-600' : 'border-gray-300'}`} 
                  />
                  {onBlurOn.confirmPsw && errors.confirmPsw && <p className='text-red-500'>{errors.confirmPsw}</p>}
                  <button type="submit" 
                  className='h-14 border-[1px] border-gray-500 text-xl hover:bg-new-pink hover:text-white duration-500'>
                    {isLoading ? <ClipLoader/> : <p>Sign Up</p>}
                    </button>
              </Form>
              )}
  
          </Formik>
      </div>
    )
  }
  
  export default RegistrationForm