import React from 'react'
import HeroSlide from '../subComponents/HeroSlide'
import Categories from '../subComponents/Categories'
import Events from '../subComponents/Events'
import JoinUs from '../subComponents/JoinUs'
import SalesHomeCards from '../../../UI/cards/SalesHomeCards'


const Home = () => {
  return (
    <>
    <HeroSlide/>
        <div className='w-full flex justify-center mt-20'>
            <div className='w-[90%] flex flex-col gap-20'>
                <Categories/>
                <div className='flex w-full h-fit justify-center items-center flex-col gap-5'>
                    <h2 className='lg:text-5xl text-3xl'>Top Sale</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-stretch gap-10 '>
                    <SalesHomeCards/>
                </div>
                    <Events/>
                <div className='flex w-full h-fit justify-center items-center flex-col gap-5'>
                    <h2 className='lg:text-5xl text-3xl'>New arrivals</h2>
                </div>
                {/* <div className='grid grid-cols-2 lg:grid-cols-3 gap-10'>
                    {allItems}
                </div> */}
                <JoinUs/>
            </div>
        </div>
    </>
  )
}

export default Home