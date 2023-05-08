import React from 'react'
import PaymentForm from './PaymentForm'

const CheckoutOrder = ({data}) => {
    const subTotal = data && data.length > 0 && data?.map(el => el.price * el.chosenAmount)?.reduce((el,acc) => acc+el)
    const finalAmount = data?.map(el => el.chosenAmount).reduce((acc, el) => acc + el)
    const shippingPrice = 0
    const items = data?.map((el, idx) => 
    <div key={idx} className='flex justify-between'>
        <div className='flex gap-5'>
            <h3>{el.title}</h3>
            <span>x</span>
            <span>{el.chosenAmount}</span>
        </div>
        <h3>{el.price}</h3>
    </div>)

  return (
    <div className='flex-1 border-[2px] border-gray-300 w-full flex justify-center h-fit py-10'>
                    <div className='w-[80%] flex flex-col gap-5 text-sm'>
                        <h2 className='text-2xl after:w-[10%] after:h-[2px] relative after:absolute after:-bottom-3 after:bg-black after:block'>Your Order</h2>
                        <div className='flex justify-between mt-10 border-b-[1px] border-gray-200 pb-3'>
                            <h3>Product</h3>
                            <h3>Price</h3>
                        </div>
                        {items}
                        <div className='flex justify-between border-y-[1px] border-gray-200 py-3'>
                            <h3>Subtotal</h3>
                            <h3>${subTotal && subTotal?.toFixed(1)}0</h3>
                        </div>
                        <div className='flex justify-between border-b-[1px] border-gray-200 pb-3'>
                            <h3>Shipping</h3>
                            <h3>Flat rate: £2.00</h3>
                        </div>
                        <div className='flex justify-between border-b-[1px] border-gray-200 pb-3'>
                            <h3>Total</h3>
                            <h3>${subTotal && subTotal?.toFixed(1) + shippingPrice}</h3>
                        </div>
                        <PaymentForm finalAmount={subTotal}/>
                    </div>
                </div>
  )
}

export default CheckoutOrder