import React, { useState } from 'react'
import { listOfCountries } from '../../checkoutModule/consts/listOfCountries'
import { useDispatch, useSelector } from 'react-redux'
import { openAddNewAddress } from '../../../slices/uiSlice'
import { useSaveAddressMutation } from '../../../services/userApiQuery'

const SaveAddressFrom = () => {
    const [mutation, {data}] = useSaveAddressMutation()
    console.log(data)
    const token = useSelector(state => state.user.authToken)
    const dispatch = useDispatch()
    const [shippingData, setShippingData] = useState({
        firstName: '',
        lastName: '',
        country: 'United States',
        state: '',
        city: '',
        zipCode: '',
        addressLineFirst: '',
        addressLineSecond: '',
        email: '',
        orderNotes: '',
        phone: ''

    })
    const handleInputs = (e) => {
        const {name, value} = e.target
        setShippingData(prevData => ({...prevData, [name] : value}))
    }
  return (
    <div className='flex-1 flex flex-col w-full items-center pt-5 pb-2 relative'>
        <div onClick={() => dispatch(openAddNewAddress(false))}
        className='text-2xl absolute top-0 right-0 w-fit h-fit px-2 hover:opacity-40
        rounded-full shadow-2xl cursor-pointer border-b-[1px] border-l-[1px] border-gray-300 flex justify-center items-center'>X</div>
        <div className='w-[80%] flex flex-col gap-2'>
            <h2 
            className='text-2xl'>Change Shipping Address</h2>
        <div className='flex w-full gap-2'>
            <div className='flex flex-col flex-1'>
                <label htmlFor="firstName" className='text-sm'>First Name*</label>
                <input type="text" 
                id='firstName'
                name='firstName'
                value={shippingData.firstName}
                onChange={(e) => handleInputs(e)}
                className='border-[1px] border-gray-200 outline-none pl-5 h-10'/>
            </div>
            <div className='flex flex-col flex-1'>
                <label htmlFor="lastName" className='text-sm'>Last Name*</label>
                <input type="text" 
                id='lastName'
                name='lastName'
                value={shippingData.lastName}
                onChange={(e) => handleInputs(e)}
                className='border-[1px] border-gray-200 outline-none pl-5 h-10'/>
            </div>
        </div>
        <div className='w-full flex flex-col'>
            <label htmlFor="" className='text-sm'>Country*</label>
            <select value={shippingData.country} name='country' onChange={(e) => handleInputs(e)}
             type="text" className='border-[1px] border-gray-200 outline-none px-5 h-10'>
                {listOfCountries}
            </select>
        </div>
        <div className='w-full flex flex-col'>
            <label htmlFor="state" className='text-sm'>State / Province*</label>
            <input type="text" 
                id='state'
                name='state'
                value={shippingData.state}
                onChange={(e) => handleInputs(e)}
                className='border-[1px] border-gray-200  outline-none pl-5 h-10'/>
        </div>
        <div className='w-full flex flex-col'>
            <label htmlFor="city" className='text-sm'>Town / City*</label>
            <input type="text" 
                id='city'
                name='city'
                value={shippingData.city}
                onChange={(e) => handleInputs(e)}
                className='border-[1px] border-gray-200  outline-none pl-5 h-10'/>
        </div>
        <div className='w-full flex flex-col gap-2'>
            <label htmlFor="" className='text-sm'>Street address*</label>
            <input type="text" 
                id='addressLineFirst'
                name='addressLineFirst'
                placeholder='House number and street name'
                value={shippingData.addressLineFirst}
                onChange={(e) => handleInputs(e)}
                className='border-[1px] border-gray-200 outline-none pl-5 h-10'/>
            <input type="text" 
                id='addressLineSecond'
                name='addressLineSecond'
                placeholder='Apartment, suite, unit, etc. (optional)'
                value={shippingData.addressLineSecond}
                onChange={(e) => handleInputs(e)}
                className='border-[1px] border-gray-200 outline-none pl-5 h-10'/>
        </div>
        <div className='w-full flex flex-col'>
            <label htmlFor="zipCode" className='text-sm'>Postcode / ZIP (optional)</label>
            <input type="text" 
                id='zipCode'
                name='zipCode'
                value={shippingData.zipCode}
                onChange={(e) => handleInputs(e)}
                className='border-[1px] border-gray-200 outline-none pl-5 h-10'/>
        </div>
        <div className='w-full flex flex-col'>
            <label htmlFor="phone" className='text-sm'>Phone (optional)</label>
            <input type="text" 
                id='phone'
                name='phone'
                value={shippingData.phone}
                onChange={(e) => handleInputs(e)}
                className='border-[1px] border-gray-200 outline-none pl-5 h-10'/>
        </div>   
        <div className='flex justify-center'>
            <button onClick={() => mutation({shippingData, token})}
            className='bg-black text-white h-12 w-5/12 hover:opacity-70'>SAVE</button>  
        </div>    
    </div>
</div>
  )
}

export default SaveAddressFrom