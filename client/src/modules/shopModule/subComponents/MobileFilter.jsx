import React, { useEffect, useState } from 'react'
import { Slider } from '@mui/material'
import { sliderStyle } from '../consts/sliderStyle'
import CategoryChoice from './CategoryChoice'
import BrandChoice from './BrandChoice'

const MobileFilter = ({category, allData, setChosenCategories, setChosenBrands,firstChoice,chosenCategories,setBrandClicked,
     setChosenPrice, isLoading, data, setValue, value, categoryClicked, setCategoryClicked, setGridImagesLoading,
    brandClicked, chosenBrands, chosenPrice}) => {

    let allCategories
    let allBrands
    const priceRange = allData?.map((el) => el.price).sort((a, b) => a - b)
    const dataForMinAndMax = data?.map(el => el.price).sort((a, b) => a - b)
    useEffect(() => {
        if (!isLoading && priceRange ){
            setValue([priceRange?.[0], priceRange?.[priceRange.length-1]])
        }
        return () => {
            setValue(null);
            setChosenPrice(null)
            setChosenCategories(null)
            setChosenBrands(null)
        }
    },[category])
    if (allData) {
        if (category === 'ALL ITEMS') {
            let categories
            if(firstChoice === 'CATEGORY') {
                categories = data?.map(el => el?.category).filter((el,idx,arr) => arr.indexOf(el) === idx)
            }
            else if (firstChoice !== 'CATEGORY'){
                categories = allData?.map(el => el?.category).filter((el,idx,arr) => arr.indexOf(el) === idx)
            }
            allCategories = categories.map((el,idx)=> 
            <CategoryChoice key={idx} name={el} setChosenCategories={setChosenCategories} 
            chosenCategories={chosenCategories} categoryClicked={categoryClicked}
            categories={categories} setCategoryClicked={setCategoryClicked} setGridImagesLoading={setGridImagesLoading}/>
            )}

            let allBrandsTemp
            if(firstChoice === 'BRAND') {
                allBrandsTemp = data?.map(el => el?.brand).reduce((acc,el) => {
                    if (el in acc) {
                        acc[el]++
                    } else {
                        acc[el] = 1
                    }
                    return acc
                }, {})
            } else {
                allBrandsTemp = allData?.map(el => el?.brand).reduce((acc,el) => {
                    if (el in acc) {
                        acc[el]++
                    } else {
                        acc[el] = 1
                    }
                    return acc
                }, {})
            }
            allBrands = Object?.entries(allBrandsTemp)?.map((el,idx) => 
            <BrandChoice key={idx} data={el} setChosenBrands={setChosenBrands} 
            setGridImagesLoading={setGridImagesLoading}
            brandClicked={brandClicked} setBrandClicked={setBrandClicked} chosenBrands={chosenBrands}/>)
    }
   const handleClearAll = () => {
        setChosenBrands(null)
        setChosenCategories(null)
        setChosenPrice(null)
}
    const [openMobileFilter, setOpenMobileFilter] = useState({
        price: false,
        brand: false,
        categories: false
    })
  return (
        <>
            <div className='fixed md:hidden w-full top-20 z-10 bg-white shadow-sm'>
                 <div className='flex'>
                    <div className='flex-1 relative'>
                        <div onClick={() => setOpenMobileFilter(prevFilter => ({brand:false, categories:false,  price: !prevFilter.price}))}
                        className='flex justify-center text-gray-600 text-lg border-[1px] border-gray-300 py-3 cursor-pointer'>Price Filter</div>
                            {openMobileFilter.price && <div className='absolute bg-white h-fit w-fit shadow-xl p-5'>
                                <div className='relative flex justify-center flex-col gap-3 py-2 shadow-inner rounded-lg border-[1px] border-gray-200'>
                                    <div onClick={() => setOpenMobileFilter(prevFilter => ({...prevFilter, price: false}))}
                                    className='absolute top-0 right-0 text-lg font-semibold cursor-pointer'>X</div>
                                    <div className='flex gap-3 items-center justify-center'>
                                        <h3 className='text-xl'>PRICE FILTER</h3>
                                    </div>
                                    <div className='flex justify-center p-5'>
                                        <Slider value={value && (value[0] || value[1]) ? value : [priceRange?.[0], priceRange?.[priceRange?.length - 1]]} 
                                        min={dataForMinAndMax?.[0]} 
                                        max={dataForMinAndMax?.[dataForMinAndMax?.length - 1]} step={1}
                                        onChange={(e) => setValue(e.target.value)}
                                        sx={sliderStyle}/>
                                    </div>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <h3>${value && value[0] ? value[0] : priceRange?.[0]}</h3>
                                        <span className='w-4 h-[2px] bg-black'/>
                                        <h3>${value && value[1] ? value[1] : priceRange?.[priceRange.length - 1]}</h3>
                                    </div>  
                                    <div className='flex justify-center'>
                                        <button className='w-24 rounded-full h-8 shadow-sm border-[1px] border-gray-300' 
                                        onClick={() => setChosenPrice(value)}>Filter</button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <div className='flex-1 relative'>
                        <div onClick={() => setOpenMobileFilter(prevFilter => ({brand: !prevFilter.brand, categories: false,  price: false}))}
                        className='flex-1 flex justify-center text-gray-600 text-lg  border-[1px] border-gray-300 py-3 cursor-pointer'>Brands</div>
                        {openMobileFilter.brand && <div className='absolute bg-white h-fit w-fit shadow-xl p-5'>
                        <div className='flex flex-col gap-7 border-[1px] shadow-inner border-gray-200 rounded-lg py-5 relative'>
                            <div onClick={() => setOpenMobileFilter(prevFilter => ({...prevFilter, brand: false}))}
                                    className='absolute top-0 right-0 text-lg font-semibold cursor-pointer'>X</div>
                            <div className='flex gap-3 items-center justify-center'>
                                    <h3 className='text-xl'>BRANDS</h3>
                                </div>
                                <div className='flex flex-col gap-5 items-center px-5'>
                                    {allBrands}
                                </div>  
                            </div>
                        </div>}
                    </div>
                    {category === 'ALL ITEMS' && <div className='flex-1 relative'>
                        <div onClick={() => setOpenMobileFilter(prevFilter => ({brand: false, categories: !prevFilter.categories,  price: false}))}
                        className='flex-1 flex justify-center text-gray-600 text-lg  border-[1px] border-gray-300 py-3 cursor-pointer'>Categories</div>
                        {openMobileFilter.categories && <div className='absolute bg-white h-fit w-fit shadow-xl p-5'>            
                                <div className='flex flex-col gap-7 border-[1px] shadow-inner border-gray-200 rounded-lg py-5 relative'>
                                    <div onClick={() => setOpenMobileFilter(prevFilter => ({...prevFilter, categories: false}))}
                                        className='absolute top-0 left-0 text-lg font-semibold cursor-pointer'>X</div>
                                    <div className='flex gap-3 items-center justify-center'>
                                        <h3 className='text-xl'>CATEGORIES</h3>
                                    </div>
                                    <div className='flex flex-col gap-5 px-3'>
                                        {allCategories}
                                    </div>  
                                </div>
                        </div>
                        }
                     </div>
                    }
                 </div>
            </div>
        </>           
  )
}

export default MobileFilter