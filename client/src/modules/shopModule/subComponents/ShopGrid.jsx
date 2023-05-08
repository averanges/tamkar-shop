import React, { useState } from 'react'
import ProductCard from '../../../UI/cards/ProductCard'

const ShopGrid = ({category, allData, setImagesLoaded, gridImagesLoading, setGridImagesLoading}) => {
    const allItems = allData?.map(el => <ProductCard key={el._id} _id={el._id} brand={el.brand} setGridImagesLoading={setGridImagesLoading}
        img={el.mainImg} title={el.title} price={el.price}  isNew={el.isNew} oldPrice={el.oldPrice} setImagesLoaded={setImagesLoaded}/>)
  return (
  <>
  {/* ${gridImagesLoading ? 'opacity-100' : 'opacity-0'} */}
    <div className={`flex flex-col items-center gap-14 duration-1000 `}>
        <div className='w-full flex-2 min-h-screen'>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
            {allItems}
            </div>
        </div>
    <div className='flex gap-5 border-2 border-new-pink rounded-full justify-center h-12 items-center px-3'>
        <div className='border-r-[1px] border-gray-200 w-10 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
        <div className='flex gap-5'>
            <span className='cursor-pointer hover:text-new-pink duration-500'>01</span>
            <span className='cursor-pointer hover:text-new-pink duration-500'>02</span>
            <span className='cursor-pointer hover:text-new-pink duration-500'>03</span>
            <span className='cursor-pointer hover:text-new-pink duration-500'>....</span>
        </div>
        <div className='border-l-[1px] border-gray-200 flex w-10 justify-end cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    </div>
</div>
</>
  )
}

export default ShopGrid