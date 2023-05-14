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
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-14'>
                {allItems}
            </div>
        </div>
</div>
</>
  )
}

export default ShopGrid