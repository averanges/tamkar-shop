import React from 'react'
import { useInfoBlocksData } from '../hooks/useInfoBlocksData'

const AdditionalInfoBlock = ({data, setReviewOpened}) => {
    const infoTypes = useInfoBlocksData(data)
  return (
    <div className='w-[90%] flex flex-col gap-10'>
        <div className='flex gap-10'>
            <h2 onClick={() => setReviewOpened(false)}
            className='text-xl cursor-pointer text-new-pink duration-500'>DESCRIPTION</h2>
            {/* <h2 onClick={() => setReviewOpened(true)}
            className='text-xl cursor-pointer hover:text-new-pink duration-500'>REVIEWS</h2> */}
        </div>
        <div className='grid w-full md:grid-cols-2 gap-x-7'>
            {infoTypes}
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='md:w-[60%]'>
            {data?.descrImages && data?.descrImages.map((el, idx) => <img key={idx} src={el} />)}
            </div>
        </div>
    </div>
  )
}

export default AdditionalInfoBlock