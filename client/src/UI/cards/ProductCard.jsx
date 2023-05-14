import React from 'react'
import Stars from '../stars/Stars'
import { openAddToCart, openAddToWishList, openQuickView } from '../../slices/uiSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCard, chooseToOpenProductId } from '../../slices/userSlice'
import { useLocation } from 'react-router-dom'

const ProductCard = ({isNew, img, title, price, _id, color, brand, oldPrice, setImagesLoaded,setGridImagesLoading}) => {
const location = useLocation().pathname
const categoriesId = location.split('/').filter(el => el !== '')[1]
const dispatch = useDispatch()
const cleanTitle = title?.replace(/[^a-zA-Z0-9 ]/g, "")
const fecthCardId = {id: _id, chosenAmount: 1}
const linkTitle = cleanTitle?.split(' ')
.filter(el => el !== '')
.map(el => el.toLowerCase()).join('-')
const handleOnLoad = () => {
    setGridImagesLoading(true)
    setImagesLoaded(true)
}
const handleAddToCardPopup = () => {
    dispatch(addToCard(fecthCardId))
    dispatch(openAddToCart({open: true, img, title}))
}
  return (
    <div className='flex flex-col hover:shadow-xl p-5 justify-end h-fit min-h-[500px] max-h-[500px]' >
            <div className='rounded-2xl cursor-pointer group/change relative'>
                <Link to={`/shop/${categoriesId}/${linkTitle}`} onClick={() => dispatch(chooseToOpenProductId(_id))} 
                className='flex justify-center items-center'>
                    <img className=' duration-500 bg-cover w-full' onLoad={() => location !== '/' && handleOnLoad()}
                    src={img} alt=""/>  
                </Link>
                <div className='hidden md:flex justify-around items-center w-full absolute bottom-4 lg:bottom-[10%] translate-y-[50%] opacity-0 group-hover/change:translate-y-0 group-hover/change:opacity-100 duration-500 ease-linear'>
                    <div onClick={() => dispatch(openQuickView({open: true, _id}))}
                    className=' border-2 border-solid border-bs-orange rounded-full w-10 h-10 bg-white flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                        </svg>
                    </div>
                    <div onClick={() => handleAddToCardPopup()}
                    className=' border-2 border-solid border-bs-orange rounded-full w-[50%] h-10 bg-white flex justify-center items-center'>
                        <p className='text-sm'>Add to cart</p>
                    </div>
                    <div  onClick={() => dispatch(openAddToWishList({open: true, img, title}))}
                    className=' border-2 border-solid border-bs-orange rounded-full w-10 h-10  bg-white flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-3 items-center'>
                <div className={`flex justify-center w-full relative ${isNew && 'flex-col md:flex-row'}`}>
                    <p className='text-sm md:text-base text-new-pink italic'>{brand}</p>
                    {isNew && <span className='w-fit bg-new-pink rounded-full px-2 text-white absolute top-0 right-0 text-sm'>NEW</span>}
                </div>
                <h2 className='text-lg cursor-pointer hover:text-bs-orange duration-500 w-full text-center'>{title}</h2>
                <div className='flex gap-5 items-center'>
                    {oldPrice && <h3 className='text-lg text-new-pink'>{`${Math.ceil(((oldPrice-price)/oldPrice)*100)}%`}</h3>}
                    <h3 className='text-lg'>{`${price}$`}</h3>
                    {oldPrice && <span className='text-sm line-through text-gray-400'>{`${oldPrice}$`}</span>}
                </div>
                <div onClick={() => handleAddToCardPopup()}
                className='md:hidden w-full flex justify-center bg-new-pink text-white cursor-pointer h-10 items-center'>
                    <h5>ADD TO CARD</h5>
                </div>
        </div>
</div>
  )
}

export default ProductCard