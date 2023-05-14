import React from 'react'
import { useDispatch } from 'react-redux'
import { changeAddToCardAmount, chooseToOpenProductId } from '../../../slices/userSlice'
import { Link } from 'react-router-dom'

const CardSmallData = ({data}) => {
    const linkToItem = data?.category.split('').find(el => el === '&') && data?.category.split(' ').map(el => el.toLowerCase()).join('-') 
    const dispatch = useDispatch()
    const cleanTitle = data?.title?.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "")
    const linkTitle = cleanTitle?.split(' ').join('-')
  return (
    <div className='flex justify-between border-b-[1px] border-gray-200 items-center'>
            <div className='h-full '>
                <img src={data?.mainImg} alt="" className='w-28 cursor-pointer' />
            </div>
              <div className='flex flex-col gap-2'>
               <Link to={`/shop/${linkToItem}/${linkTitle}`} onClick={() => dispatch(chooseToOpenProductId(data?._id))}
               className='text-md hover:text-new-pink cursor-pointer duration-500'>{data?.title}</Link>
              <div className='flex justify-around items-center text-sm gap-2'>
              <div className='flex justify-center items-center border-[1px] border-gray-200 rounded-lg gap-4'>
                <span onClick={() => dispatch(changeAddToCardAmount({id: data._id, type: 'minus'}))}
                className='border-r-[1px] border-gray-300 text-2xl px-3 cursor-pointer '>-</span>
                <span className='text-md'>{data?.chosenAmount}</span>
                <span onClick={() => dispatch(changeAddToCardAmount({id: data._id, type: 'plus'}))}
                className='border-l-[1px] border-gray-300 text-lg cursor-pointer px-3'>+</span>
            </div>
            <p className='text-base md:text-2xl font-semibold'>${data.price}0</p> 
            </div>
          </div>
        <span onClick={() => dispatch(changeAddToCardAmount({id: data._id, type: 'delete'}))}
        className='text-2xl cursor-pointer hover:text-new-pink mr-3 border-[1px] border-gray-200 rounded-full min-w-[2rem] min-h-[1rem] flex justify-center items-center'>x</span>
     </div>
  )
}

export default CardSmallData