import React from 'react'
import { Link } from 'react-router-dom'

const CartResult = ({data}) => {
    const subTotal = data && data.length > 0 && data?.map(el => el.price * el.chosenAmount)?.reduce((el,acc) => acc+el)
    const shippingPrice = 0
  return (
    <div className='flex-1 bg-gray-100 rounded-xl flex justify-center py-5'>
                <div className='w-[80%] h-[80%] flex flex-col gap-5'>
                <h2 className='text-xl font-semibold border-b-[1px] border-gray-300 pb-3'>CART TOTALS</h2>
                <div className='flex justify-between border-b-[1px] border-gray-300 pb-3'>
                    <h3 className='text-gray-600'>SUBTOTAL</h3>
                    <h3 className='text-xl font-semibold'>${subTotal && subTotal?.toFixed(1)}0</h3>
                </div>
                <div className='flex justify-between border-b-[1px] border-gray-300 pb-3'>
                    <h3 className='text-gray-600'>SHIPPING</h3>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-2'>
                            <input type="radio" name="" id="" />
                            <label>Flat rate: $3.00</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio" name="" id="" />
                            <label>Free shipping</label>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio" name="" id="" />
                            <label>Local pickup</label>
                        </div>
                        <h3>Shipping to USA.</h3>
                        <span className='text-sm font-semibold hover:text-new-pink duration-500 cursor-pointer'>Change address</span>
                    </div>
                </div>
                <div className='flex justify-between border-b-[1px] border-gray-300 pb-3'>
                    <h3 className='text-gray-600'>TOTAL</h3>
                    <h3 className='text-xl font-semibold'>${subTotal && subTotal?.toFixed(1) + shippingPrice}</h3>
                </div>
                <div className='flex justify-end w-full'>
                    <Link
                    to='/checkout' className='bg-new-pink w-56 h-12 rounded-lg text-white hover:bg-black duration-500 flex justify-center items-center'>PROCEED TO CHECKOUT</Link>
                </div>
                </div>
            </div>
  )
}

export default CartResult