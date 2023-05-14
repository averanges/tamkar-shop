import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Filter from '../subComponents/Filter'
import ShopGrid from '../subComponents/ShopGrid'
import { useGetAllItemsQuery } from '../../../services/userApiQuery'
import { useChoiceFilter } from '../hooks/useChoiceHook'
import { getRandomColor } from '../../../globalHelpers/getRandomColor'
import ClipLoader from 'react-spinners/ClipLoader'
import MobileFilter from '../subComponents/MobileFilter'

const Shop = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const [gridImagesLoading, setGridImagesLoading] = useState(false)
    const [brandClicked, setBrandClicked] = useState(false)
    const [categoryClicked, setCategoryClicked] = useState(false)
    const [randomColor, setRandonColor] = useState('#FFEDB4')
    const location = useLocation().pathname

    const [value, setValue] = useState(null)
    const getLocation = () => {
        const currentLocation = location.split('/').filter(el => el !== '')[1]
        if([...currentLocation].find(el => el === '-')){
            return currentLocation.split('-').join(' ').toUpperCase()
        }
        return currentLocation.toUpperCase()
    }
    const category = getLocation()

    const [size, setSize] = useState(window.innerWidth)
    useEffect(() => {
      const handleResize = () => setSize(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    const {data, error, isLoading} = useGetAllItemsQuery({category})
    const {allData, setChosenCategories, setChosenBrands, setChosenPrice, 
        firstChoice, chosenCategories, chosenBrands, chosenPrice} = useChoiceFilter(data)
    useEffect(() => {
        setCategoryClicked(false)
        setChosenCategories('')
        setValue(null)
        setRandonColor(getRandomColor())
    },[category])
    useEffect(() => {
        if(categoryClicked) {
            setTimeout(() => setImagesLoaded(true),300)
        }
    },[categoryClicked])
  return (
    <>
    { isLoading ? <div className='w-screen h-screen flex justify-center items-center'><ClipLoader/></div>:
        (<div className={`flex flex-col h-full w-full justify-center items-center md:gap-10 mt-20 
        duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <MobileFilter category={category} allData={allData} setChosenCategories={setChosenCategories} data={data}
                setChosenBrands={setChosenBrands} setChosenPrice={setChosenPrice} isLoading={isLoading}
                setValue={setValue} value={value} setCategoryClicked={setCategoryClicked} categoryClicked={categoryClicked}
                firstChoice={firstChoice} chosenCategories={chosenCategories} setGridImagesLoading={setGridImagesLoading}
                brandClicked={brandClicked} setBrandClicked={setBrandClicked} chosenBrands={chosenBrands} chosenPrice={chosenPrice}/>
                
            <div style={{backgroundColor: randomColor}} className='bg-light-pump border-gray-300 shadow-inner border-[1px] w-full h-40 hidden md:flex justify-center items-center'>
                <div className='w-[80%]'>
                        <h2 className='text-5xl text-white font-md tracking-widest'>{`${getLocation()}`}</h2>
                </div>
            </div>
            <div className='flex flex-col md:flex-row h-fit gap-10 md:w-full px-5 mt-10 md:mt-0'>
                <Filter category={category} allData={allData} setChosenCategories={setChosenCategories} data={data}
                setChosenBrands={setChosenBrands} setChosenPrice={setChosenPrice} isLoading={isLoading}
                setValue={setValue} value={value} setCategoryClicked={setCategoryClicked} categoryClicked={categoryClicked}
                firstChoice={firstChoice} chosenCategories={chosenCategories} setGridImagesLoading={setGridImagesLoading}
                brandClicked={brandClicked} setBrandClicked={setBrandClicked} chosenBrands={chosenBrands} chosenPrice={chosenPrice}/>
               
                <ShopGrid category={category} allData={allData} gridImagesLoading={gridImagesLoading}
                setImagesLoaded={setImagesLoaded} setGridImagesLoading={setGridImagesLoading}/>
            </div>
        </div>)}
    </>
  )
}

export default Shop