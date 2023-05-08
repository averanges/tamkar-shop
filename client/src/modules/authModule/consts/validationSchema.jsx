import * as Yup from 'yup'

export const registerValidationSchema = Yup.object().shape({
    name: Yup.string()
    .min(4, '*Must be 4 characters or more')
    .required('*User Name is required'),
    email: Yup.string()
    .email('*Invalid email address')
    .required('*Email address is required'),
    psw: Yup.string()
    .min(4, '*Password is too short')
    .required('*Password is required'),
    confirmPsw: Yup.string()
    .oneOf([Yup.ref('psw'), null], '*Passwords must match')
    .required('*Password confirmation is required')
})
export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
    .email('*Valid email required')
    .required('*Email is required'),
    psw: Yup.string()
    .required('*Password is required')
})
