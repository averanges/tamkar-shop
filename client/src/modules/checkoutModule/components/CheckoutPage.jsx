import React, { useEffect, useState } from 'react'
import BillingDetailsBlock from '../subComponents/BillingDetailsBlock'
import CheckoutOrder from '../subComponents/CheckoutOrder'
import { useSelector } from 'react-redux'
import { useGetAddedCardQuery } from '../../../services/userApiQuery'
import { getRandomColor } from '../../../globalHelpers/getRandomColor'

const CheckoutPage = () => {
    const allCardData = useSelector(state => state.user.allCardData)
    const {data} = useGetAddedCardQuery(allCardData)
    const [randomColor, setRandonColor] = useState('#FFEDB4')
    useEffect(() => {
        setRandonColor(getRandomColor())
    },[])
  return (
    <div className='flex flex-col gap-20 items-center'>
        <div style={{backgroundColor: randomColor}} 
            className='mt-20 border-gray-300 shadow-inner border-[1px] w-full h-40 hidden md:flex justify-center items-center'>
                <div className='w-[80%]'>
                        <h2 className='text-5xl text-white font-md tracking-widest'>CHECKOUT</h2>
                </div>
        </div>
        <div className='w-full flex justify-center flex-row'>
            <div className='flex w-[80%] flex-col lg:flex-row gap-10'>
                <BillingDetailsBlock/>
                <CheckoutOrder data={data}/>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage