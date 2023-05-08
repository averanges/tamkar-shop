import React, { useState } from 'react'
import { listOfCountries } from '../consts/listOfCountries'

const BillingDetailsBlock = () => {
    const [shippingData, setShippingData] = useState({
        firstName: '',
        lastName: '',
        country: '',
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
    <div className='flex-1 flex flex-col gap-10'>
        <h2 
        className='text-2xl after:w-[10%] after:h-[2px] relative after:absolute after:-bottom-3 after:bg-black after:block'>SHIPPING ADDRESS</h2>
    <div className='flex w-full gap-5'>
        <div className='flex flex-col gap-3 flex-1'>
            <label htmlFor="firstName" className='text-sm'>First Name</label>
            <input type="text" 
            id='firstName'
            name='firstName'
            value={shippingData.firstName}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
        </div>
        <div className='flex flex-col gap-3 flex-1'>
            <label htmlFor="lastName" className='text-sm'>Last Name</label>
            <input type="text" 
            id='lastName'
            name='lastName'
            value={shippingData.lastName}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
        </div>
    </div>
    <div className='w-full flex flex-col gap-5'>
        <label htmlFor="" className='text-sm'>Country</label>
        <select type="text" className='border-[1px] border-gray-200 h-12 outline-none px-5'>
            {listOfCountries}
        </select>
    </div>
    <div className='w-full flex flex-col gap-5'>
        <label htmlFor="state" className='text-sm'>State / Province</label>
        <input type="text" 
            id='state'
            name='state'
            value={shippingData.state}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
    </div>
    <div className='w-full flex flex-col gap-5'>
        <label htmlFor="city" className='text-sm'>Town / City</label>
        <input type="text" 
            id='city'
            name='city'
            value={shippingData.city}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
    </div>
    <div className='w-full flex flex-col gap-5'>
        <label htmlFor="" className='text-sm'>Street address</label>
        <input type="text" 
            id='addressLineFirst'
            name='addressLineFirst'
            placeholder='House number and street name'
            value={shippingData.addressLineFirst}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
        <input type="text" 
            id='addressLineSecond'
            name='addressLineSecond'
            placeholder='Apartment, suite, unit, etc. (optional)'
            value={shippingData.addressLineSecond}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
    </div>
    <div className='w-full flex flex-col gap-5'>
        <label htmlFor="zipCode" className='text-sm'>Postcode / ZIP (optional)</label>
        <input type="text" 
            id='zipCode'
            name='zipCode'
            value={shippingData.zipCode}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
    </div>
    <div className='w-full flex flex-col gap-5'>
        <label htmlFor="phone" className='text-sm'>Phone (optional)</label>
        <input type="text" 
            id='phone'
            name='phone'
            value={shippingData.phone}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
    </div>
    <div className='w-full flex flex-col gap-5'>
        <label htmlFor="email" className='text-sm'>Email address</label>
        <input type="email" 
            id='email'
            name='email'
            value={shippingData.email}
            onChange={(e) => handleInputs(e)}
            className='border-[1px] border-gray-200 h-12 outline-none pl-5'/>
    </div>
    <div className='w-full flex flex-col gap-5'>
        <label htmlFor="orderNotes" className='text-sm'>Order notes (optional)</label>
        <input type="text" 
            id='orderNotes'
            name='orderNotes'
            value={shippingData.orderNotes}
            onChange={(e) => handleInputs(e)}
            placeholder='Notes about your order, e.g. special notes for delivery.'
            className='border-[1px] border-gray-200 h-32 pl-5 pb-20 outline-none'/>
    </div>
</div>
  )
}

export default BillingDetailsBlock