import React from 'react'
import { useInfoBlocksData } from '../hooks/useInfoBlocksData'

const ReviewBlock = ({setReviewOpened}) => {
    const infoTypes = useInfoBlocksData(data)
  return (
    <div className='w-[90%] h-full flex gap-10'>
                            <div className='flex flex-1 flex-col gap-10'>
                                <div className='flex gap-10'>
                                    <h2 onClick={() => setReviewOpened(false)}
                                    className='text-xl cursor-pointer hover:text-new-pink duration-500'>DESCRIPTION</h2>
                                    <h2 onClick={() => setReviewOpened(true)}
                                    className='text-xl cursor-pointer text-new-pink duration-500'>REVIEWS</h2>
                                </div>
                                <Review/>
                            </div>
                            <div className='flex-1 flex flex-col gap-10'>
                                <h2 className='text-xl'>WRITE A REVIEW</h2>
                                <div>
                                    <form action="" className='flex flex-col gap-10'>
                                        <input type="text" placeholder='Leave your review' className='pb-5 border-b-[1px] border-gray-400 outline-none'/>
                                        <input type="text" placeholder='Full Name' className=' pb-5 border-b-[1px] border-gray-400 outline-none'/>
                                        <input type="text" placeholder='Eamil Address' className=' pb-5 border-b-[1px] border-gray-400 outline-none'/>
                                        <div className='flex gap-5 items-center'>
                                            <h2 className='text-xl'>Provide your ratings</h2>
                                            <Stars/>
                                        </div>
                                        <button className='bg-new-pink rounded-full w-40 h-12 text-white hover:bg-black duration-300'>SUBMIT</button>
                                    </form>
                                </div>
                            </div>
                        </div>
  )
}

export default ReviewBlock