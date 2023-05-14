import React, { useEffect, useState } from 'react'
import { Slider } from '@mui/material'
import { sliderStyle } from '../consts/sliderStyle'
import CategoryChoice from './CategoryChoice'
import BrandChoice from './BrandChoice'

const Filter = ({category, allData, setChosenCategories, setChosenBrands,firstChoice,chosenCategories,setBrandClicked,
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
        if (category === 'HAIR CARE') {
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
  return (
        <>
                { !isLoading &&
                    <div className={`flex-1 h-full gap-10 hidden md:flex flex-col max-w-fit`}>
                <div className='w-full flex h-fit items-center'>
                    <input type="text" placeholder='Search here...'
                    className='w-60 h-12 border-[1px] border-gray-200  placeholder-gray-400 pl-3 outline-none shadow-inner' />
                    <div className=' h-12 w-10 flex justify-center items-center rounded-r-lg border-[1px] border-gray-200 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}  className="w-4 h-4 stroke-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
                {((chosenCategories && chosenCategories?.length > 0) || chosenPrice 
                || (chosenBrands && chosenBrands?.length > 0)) && 
                <div className='shadow-inner rounded-lg border-[1px] border-gray-200 p-5 flex flex-col gap-5'>
                    <div className='flex justify-between items-center'>
                        <h5 className='text-2xl'>REFINE BY: </h5>
                        <span onClick={handleClearAll}
                        className='text-sm cursor-pointer hover:text-new-pink' >CLEAR ALL</span>
                    </div>
                    {(chosenPrice && chosenPrice?.length) &&
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-2 items-end'>
                                <h4 className='text-md font-semibold'>Price:</h4>
                                <h5 className='text-sm'>Min price: {chosenPrice[0]}</h5>
                                <h5 className='text-sm'>Max price: {chosenPrice[1]}</h5>
                            </div>
                            <span className='text-lg cursor-pointer hover:text-new-pink'
                            onClick={() => setChosenPrice(null)}>x</span>
                        </div>
                    }
                    {(chosenCategories && chosenCategories?.length > 0) &&
                        chosenCategories.map((el, idx) => 
                        
                        <div key={idx} className='flex w-full justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <h4 className='text-md font-semibold'>Category:</h4>
                            <h5 className='text-sm'>{el}</h5>
                        </div>
                            <span className='text-xl cursor-pointer hover:text-new-pink'
                            onClick={() => setChosenCategories(prev => prev && prev?.includes(el) && prev?.filter(subEl => subEl !== el))}>x</span>
                        </div>
                        )}
                         {(chosenBrands && chosenBrands?.length > 0) &&
                        chosenBrands.map((el, idx) => 
                        <div key={idx} className='flex w-full justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <h4 className='text-md font-semibold'>Brand:</h4>
                            <h5 className='text-sm'>{el}</h5>
                        </div>
                            <span className='text-xl cursor-pointer hover:text-new-pink'
                            onClick={() => setChosenBrands(prev => prev && prev?.includes(el) && prev?.filter(subEl => subEl !== el))}>x</span>
                        </div>
                        )}
                </div>}
                <div className='relative flex justify-center flex-col gap-3 py-2 shadow-inner rounded-lg border-[1px] border-gray-200'>
                    <div className='flex gap-3 items-center justify-center'>
                        <h3 className='text-2xl'>PRICE FILTER</h3>
                    </div>
                    <div className='flex justify-center'>
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
                {  allCategories &&             
                <div className='flex flex-col gap-7 border-[1px] shadow-inner border-gray-200 rounded-lg py-5'>
                    <div className='flex gap-3 items-center justify-center'>
                        <h3 className='text-2xl'>CATEGORIES</h3>
                    </div>
                    <div className='flex flex-col gap-5 px-3'>
                        {allCategories}
                    </div>  
                </div>
                }
                <div className='flex flex-col gap-7 border-[1px] shadow-inner border-gray-200 rounded-lg py-5'>
                    <div className='flex gap-3 items-center justify-center'>
                        <h3 className='text-2xl'>BRANDS</h3>
                    </div>
                    <div className='flex flex-col gap-5 items-center px-5'>
                        {allBrands}
                    </div>  
                </div>
            </div> }
            </>           
  )
}

export default Filter