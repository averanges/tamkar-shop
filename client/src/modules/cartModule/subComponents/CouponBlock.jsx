import React from 'react'

const CouponBlock = () => {
  return (
    <div className='flex-1 flex flex-col gap-5'>
        <h2 className='text-xl font-semibold border-b-[1px] border-gray-300 pb-3'>COUPON</h2>
        <p className='text-gray-400'>Enter your coupon code if you have one.</p>
        <input type="text" placeholder='Coupon text' className='border-[1px] border-gray-300 h-12 pl-5 placeholder-gray-400 outline-none' />
        <div>
            <button className='border-[1px] border-gray-300 w-40 h-12 rounded-md outline-none hover:bg-new-pink hover:text-white duration-500'>APPLY COUPON</button>
        </div>
    </div>
  )
}

export default CouponBlock