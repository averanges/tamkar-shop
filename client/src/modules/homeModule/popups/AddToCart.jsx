import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openAddToCart } from '../../../slices/uiSlice'
import usePopupOpen from '../hooks/usePopupHook'
import { useGetAddedCardQuery } from '../../../services/userApiQuery'

const AddToCart = () => {
    const addToCartData = useSelector(state => state.ui.addToCartData)
    const allCardData = useSelector(state => state.user.allCardData)
    const {data, error, isLoading} = useGetAddedCardQuery(allCardData)
    const {open, img} = addToCartData
    const dispatch = useDispatch()
    const {openLayer , move} = usePopupOpen(open)

    const colors = ['#DCFFD2','#FFEDB4','#DFE4FF','#FFEACC','#FFDAE0','#FFF3DA']
    const random = Math.floor(Math.random() * colors.length)

  return (
    <div className={` ${openLayer ? 'flex justify-center items-center bg-[rgba(0,0,0,0.6)] fixed z-20 w-screen h-screen' : 'hidden'} `}>
        <div className={`bg-white flex justify-center w-96 lg:w-[35%] rounded-lg flex-col items-center gap-5 pb-5 duration-300 ${move ? 'translate-y-0 opacity-100' : '-translate-y-[30%] opacity-0'}`}>
            <div className='w-full h-8 bg-new-pink rounded-t-lg flex justify-center items-center cursor-pointer'
            onClick={() => dispatch(openAddToCart({open: false, img: null}))}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className='flex gap-5'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-light-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                </div>
                <p>Added to cart successfully!</p>
            </div>
            <div className='w-[90%] flex justify-center' style={{backgroundColor: move ? colors[random] : null}}>
                <img className='h-80' src={img} alt="" />
            </div>
            <h2 className='text-xl'>Readable content DX22</h2>
        </div>
    </div>
  )
}

export default AddToCart