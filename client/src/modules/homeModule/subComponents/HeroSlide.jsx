import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleHomeImgObserved, handleIsObserved } from '../../../slices/uiSlice'
import FirstProduct from '../../../assets/slider1.png'

const HeroSlide = () => {
    const homeImgRef = useRef()
    const navChangeRef = useRef()
    const homeImgObserved = useSelector(state => state.ui.homeImgObserved)
    const dispatch = useDispatch()
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            dispatch(handleIsObserved (entry.isIntersecting))
        })
        if(navChangeRef.current) {
            observer.observe(navChangeRef.current)
        }
        dispatch(handleHomeImgObserved (true))
    },[])
  return (
    <div className='w-screen h-screen flex'>
            <div className='bg-home-gray flex-1 flex items-center justify-center w-[50%] '>
                <div className='relative w-3/5 h-3/5 flex lg:justify-center flex-col gap-3 lg:gap-5'>
                    <h1 className={`lg:text-[14rem] md:text-9xl text-6xl font-heroH1 text-bs-pink flex items-center w-fit  ${homeImgObserved ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'} duration-[1.3s] delay-1000`}>Best</h1>
                    <h2 ref={navChangeRef} className={`text-3xl md:text-5xl lg:text-7xl font-medium absolute font-heroH2 tracking-widest top-[10%] md:top-[25%] lg:top-[40%] xl:top-[45%] ${homeImgObserved ? 'translate-x-0 opacity-100' : 'translate-y-40 opacity-0'} duration-[1.3s] delay-[1.3s]`}>skin care</h2>
                    <p className={`text-sm md:text-base lg:text-lg mt-5 ${homeImgObserved ? 'translate-x-0 opacity-100' : 'translate-y-40 opacity-0'} duration-[1.3s] delay-[1.4s]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique laudantium a dolores quod!</p>
                    <button 
                    className={` lg:py-2 border-2 border-solid border-black rounded-full w-24 lg:w-48  bg-white hover:bg-bs-orange  ${homeImgObserved ? 'translate-x-0 opacity-100' : 'translate-y-40 opacity-0'} duration-[1.3s] delay-[1.5s] }`}>
                        Buy now</button>
                </div>
            </div>
            <div className='bg-home-blue flex-1 flex relative justify-center items-center md:w-[50%]'>
                    <img ref={homeImgRef} src={FirstProduct} alt="" className={`object-fill absolute md:-left-[20%] duration-[1.3s] ease-linear ${homeImgObserved ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}/>
            </div>
        </div>
  )
}

export default HeroSlide