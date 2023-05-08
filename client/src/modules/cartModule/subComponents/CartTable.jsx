import React from 'react'
import CartItem from './CartItem'

const CartTable = ({data}) => {
  const allCardPageData = data?.map((el, idx) => <CartItem key={idx} data={el}/>)
  if (!data?.length){
    return null
  }
  return (
    <div className='w-full h-full flex justify-center items-center'>
    <table className='lg:w-[80%]'>
        <thead>
            <tr>
            <th className='w-fit lg:h-10 border-[1px] border-gray-300'></th>
            <th className='w-fit lg:h-10 border-[1px] border-gray-300'></th>
            <th className='w-fit lg:h-10 border-[1px] border-gray-300'>PRODUCT</th>
            <th className='w-fit lg:h-10 border-[1px] border-gray-300'>PRICE</th>
            <th className='w-fit lg:h-10 border-[1px] border-gray-300'>QUANTITY</th>
            <th className='w-fit lg:h-10 border-[1px] border-gray-300'>TOTAL</th>
            </tr>
        </thead>
        <tbody>
          {allCardPageData}
        </tbody>
    </table>
</div>
  )
}

export default CartTable