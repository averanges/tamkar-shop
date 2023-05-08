import React  from 'react'
import { openOrCloseCart } from '../../../slices/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import usePopupOpen from '../hooks/usePopupHook'
import { Link, useLocation } from 'react-router-dom'
import { useGetAddedCardQuery } from '../../../services/userApiQuery'
import CardSmallData from '../subComponents/CardSmallData'


const Cart = () => {
    const cartOpen = useSelector(state => state.ui.cartOpen)
    const dispatch = useDispatch()
    const {openLayer , move} = usePopupOpen(cartOpen)
    const allCardData = useSelector(state => state.user.allCardData)
    const {data, error, isLoading} = useGetAddedCardQuery(allCardData)
    const subTotal = data?.length ? data?.map(el => el.price * el.chosenAmount).reduce((acc,el) => acc + el).toFixed(1) : null
    const allSmallCards = data?.map((el, idx) => <CardSmallData key={idx} data={el}/>)
    
  return (
    <div className={` ${openLayer ? 'flex justify-end bg-[rgba(0,0,0,0.6)] fixed z-20 w-full h-full' : 'hidden'} `}>
        <div className={`bg-white h-full w-72 lg:w-[450px] duration-200 ease-linear flex flex-col ${move ? 'translate-x-0' : 'translate-x-[100%]'}`}>
            <div className='w-full flex justify-around h-20 text-black  items-center cursor-pointer duration-300 border-b-[1px] border-gray-200'
            onClick={() => dispatch(openOrCloseCart(false))}
            >
                <h2 className='text-md font-semibold'>SHOPPING CART</h2>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </div>
        {(data && data.length > 0) ?
            <div className='flex flex-col justify-between items-center h-full'>
                <div className='w-full flex-col flex overflow-y-auto'>
                    {allSmallCards}
                </div>
                <div className='flex flex-col gap-5 w-[80%]'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Subtotal:</h2>
                    <h2 className='text-xl'>{data?.length > 0 ? ('$' + subTotal + '0') : ''}</h2>
                </div>
                    <Link to='/checkout' onClick={() => dispatch(openOrCloseCart(false))}
                    className='w-full bg-new-pink text-white h-12 font-medium text-xl flex justify-center items-center hover:bg-new-pink duration-300'>
                        CHECKOUT
                    </Link>
                    <Link to='/cart' onClick={() => dispatch(openOrCloseCart(false))}
                    className='w-full text-gray-500 h-12 text-md flex justify-center font-medium hover:text-new-pink duration-300'>VIEW CART</Link>
                </div>
            </div>
               :
               <div className='flex w-full h-full justify-center items-center'>
                    <h4 className='text-xl'>Your cart is empty.</h4>
               </div> }
        </div>
    </div>
  )
}

export default Cart