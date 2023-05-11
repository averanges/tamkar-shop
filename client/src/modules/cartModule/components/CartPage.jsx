import React, { useEffect, useState } from 'react'
import CartTable from '../subComponents/CartTable'
import CouponBlock from '../subComponents/CouponBlock'
import CartResult from '../subComponents/CartResult'
import { getRandomColor } from '../../../globalHelpers/getRandomColor'
import { useGetAddedCardQuery } from '../../../services/userApiQuery'
import { useSelector } from 'react-redux'

const CartPage = () => {
    const allCardData = useSelector(state => state.user.allCardData)
    const {data, error, isLoading} = useGetAddedCardQuery(allCardData)
    const [randomColor, setRandonColor] = useState('#FFEDB4')
    useEffect(() => {
        setRandonColor(getRandomColor())
    },[])
  return (
    <div className='flex flex-col gap-20 items-center mt-20 md:mt-0'>
            <div style={{backgroundColor: randomColor}} 
            className='mt-20 border-gray-300 shadow-inner border-[1px] w-full h-40 hidden md:flex justify-center items-center'>
                <div className='w-[80%]'>
                        <h2 className='text-5xl text-white font-md tracking-widest'>SHOPPING CART</h2>
                </div>
            </div>
            <CartTable data={data}/>
        <div className='w-[80%] flex gap-7 flex-col lg:flex-row'>
            <CouponBlock/>
            <CartResult data={data}/>
        </div>
   </div>
  )
}

export default CartPage