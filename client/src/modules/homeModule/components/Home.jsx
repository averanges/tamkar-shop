import React, { useState } from 'react'
import HeroSlide from '../subComponents/HeroSlide'
import Categories from '../subComponents/Categories'
import Events from '../subComponents/Events'
import JoinUs from '../subComponents/JoinUs'
import SalesHomeCards from '../../../UI/cards/SalesHomeCards'
import NewHomeCards from '../../../UI/cards/NewHomeCards'


const Home = () => {
    const [loading, setLoading] = useState(false)
  return (
    <>
    <HeroSlide/>
        <div className='w-full flex justify-center mt-20'>
            <div className='w-[90%] flex flex-col gap-10 md:gap-20'>
                <Categories/>
                <div className='flex w-full h-fit justify-center items-center flex-col'>
                    <h2 className='lg:text-5xl text-4xl mt-10 md:mt-0'>Top Sale</h2>
                </div>
                <div className={`w-full ${loading ? '' : 'grid'} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-stretch gap-10`}>
                    <SalesHomeCards setLoading={setLoading}/>
                </div>
                    <Events/>
                <div className='flex w-full h-fit justify-center items-center flex-col'>
                    <h2 className='lg:text-5xl text-4xl mt-10 md:mt-0'>New arrivals</h2>
                </div>
                <div className={`w-full ${loading ? '' : 'grid'} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-stretch gap-10`}>
                    <NewHomeCards setLoading={setLoading}/>
                </div>
                {/* <JoinUs/> */}
            </div>
        </div>
    </>
  )
}

export default Home