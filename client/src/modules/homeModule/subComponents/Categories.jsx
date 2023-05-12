import React from 'react'
import { dataCategories } from '../consts/dataCategories'
import { Link } from 'react-router-dom'

const categories = dataCategories.map((el, idx) => 
    <Link to='/shop/hair-care'
    className='cursor-pointer lg:flex-1 duration-500 rounded-xl h-56 hover:shadow-xl flex flex-col items-center justify-around group/edit' style={{backgroundColor: el.color}} key={idx}>
        <div className='h-fit w-full group-hover/edit:animate-slide-in flex justify-center items-center'> 
            <img src={el.img} alt="" />
        </div>
        <p className='relative before:block before:w-[50%] before:h-px before:bg-bs-orange before:absolute before:-top-3 before:left-3'>{el.name}</p>
    </Link>
    )

const Categories = () => {
  return (
    <div className='flex justify-around w-full '>
    <div className='h-fit lg:flex lg:justify-around gap-5 grid grid-cols-2 md:grid-cols-3 justify-stretch w-full px-5'>
        {categories}
    </div>
</div>
  )
}

export default Categories