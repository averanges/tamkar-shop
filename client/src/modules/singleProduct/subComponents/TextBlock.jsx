import React, { useState } from 'react'
import Stars from '../../../UI/stars/Stars'
import { useDispatch, useSelector } from 'react-redux'
import { addToCard } from '../../../slices/userSlice'

const TextBlock = ({data, id}) => {
    const dispatch = useDispatch()
    const [chosenAmount, setChosenAmount] = useState(1)
    const fecthCardId = {id, chosenAmount}
    const allCardData = useSelector(state => state.user.allCardData)
    
  return (
    <div className='flex-1 flex justify-center items-center'>
    <div className='w-[90%] h-full flex flex-col gap-5'>
        <div className='flex flex-col gap-7 border-b-[1px] border-gray-300'>
            <div className='flex justify-center md:justify-start'>
                <p className={`text-lg text-new-pink duration-1000 ${data?.brand ? 'opacity-100' : 'opacity-0'}`}>
                    {data?.brand}
                </p>
            </div>
            <div className='flex justify-center w-full md:justify-start'>
                <h2 className={`text-4xl duration-1000 ${data?.title} ? 'opacity-100' : 'opacity-0'}`}>
                    {data?.title}
                </h2>
            </div>
            <div className='flex gap-5 items-center justify-center md:justify-start'>
                <Stars/>
                <p className='italic text-sm text-gray-400'>150 reviews</p>
            </div>
            <p className={`text-base duration-1000 ${data?.descr ? 'opacity-100' : 'opacity-0'}`}>
            {data?.descr}
            </p>
            <div className='flex justify-center md:justify-start'>
                <div className='mb-10 border-2 border-new-pink rounded-full w-2/6 md:w-4/12 h-12 items-center flex justify-between'>
                    <span className='text-4xl flex justify-center flex-1 h-4/5 items-center border-r-[1px] border-gray-300 cursor-pointer'
                    onClick={() => setChosenAmount(prev => prev === 1 ? prev : prev -= 1)}>-</span>
                    <span className='text-2xl flex-1 flex justify-center h-4/5 items-center border-r-[1px] border-gray-300'>{chosenAmount}</span>
                    <span className='text-2xl flex-1 flex justify-center cursor-pointer' 
                    onClick={() => setChosenAmount(prev => prev += 1)}>+</span>
                </div>
            </div>
        </div>
        <div className='flex gap-8 items-center'>
            {data?.oldPrice && <h3 className='text-4xl text-new-pink'>{`${Math.ceil(((data?.oldPrice-data?.price)/data?.oldPrice)*100)}%`}</h3>}
            <h3 className='text-4xl'>{`${Number.isInteger(data?.price) ? data?.price : data?.price + '0'}$`}</h3>
            {data?.oldPrice && <span className='text-2xl line-through text-gray-400'>{`${data?.oldPrice}$`}</span>}
            <button onClick={() => dispatch(addToCard(fecthCardId))}
            className='bg-new-pink rounded-full text-white w-full md:w-32 h-14 text-sm hover:bg-black duration-300'>ADD TO CART</button>
        </div>
    </div>
</div>
  )
}

export default TextBlock