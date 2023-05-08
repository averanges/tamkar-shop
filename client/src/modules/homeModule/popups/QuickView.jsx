import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openQuickView } from '../../../slices/uiSlice'
import Stars from '../../../UI/stars/Stars'
import usePopupOpen from '../hooks/usePopupHook'

const QuickView = () => {
    const dispatch = useDispatch()
    const quickViewOpened = useSelector(state => state.ui.quickViewOpened)
    const {open, img} = quickViewOpened
    const {openLayer , move} = usePopupOpen(open)

      const colors = ['#DCFFD2','#FFEDB4','#DFE4FF','#FFEACC','#FFDAE0','#FFF3DA']
      const random = Math.floor(Math.random() * colors.length)

  return (
    <div className={` ${openLayer ? 'flex justify-center items-center bg-[rgba(0,0,0,0.6)] fixed z-20 w-full h-full' : 'hidden'} `}>
        <div className={`flex  w-[90%] h-[90%] bg-white rounded-lg relative overflow-hidden duration-300 ${move ? 'translate-y-0 opacity-100' : '-translate-y-[30%] opacity-0'}`}>
            <div onClick={() => dispatch(openQuickView({open: false, img: null}))}
            className='w-16 h-16 bg-white cursor-pointer border-[1px] border-gray-400 absolute rounded-full opacity-50 hover:opacity-100 flex justify-center items-center top-0 left-0 -translate-x-3 -translate-y-3'>    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="black" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='flex justify-center items-center w-[90%] h-[90%] rounded-lg' style={{backgroundColor: colors[random]}}>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='w-[90%] h-[90%] flex flex-col gap-5'>
                    <div className='flex flex-col gap-7 border-b-[1px] border-gray-300'>
                        <p className='text-sm md:text-base'>Premioum collection</p>
                        <h2 className='md:text-4xl'>Offbline Instant Age Rewind Eraser.</h2>
                        <div className='flex gap-5 items-center'>
                            <Stars/>
                            <p className='italic text-sm text-gray-400'>150 reviews</p>
                        </div>
                        <p className='text-sm md:text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem neque accusamus temporibus vitae soluta, voluptate, quasi perspiciatis aliquid aperiam eveniet, eaque eum minus ea id ab obcaecati molestias ad!
                        </p>
                        <div className='mb-10 border-2 border-new-pink rounded-full w-4/6 md:w-4/12 h-12 items-center flex justify-between'>
                            <span className='text-4xl flex justify-center flex-1 h-4/5 items-center border-r-[1px] border-gray-300 cursor-pointer'>-</span>
                            <span className='text-2xl flex-1 flex justify-center h-4/5 items-center border-r-[1px] border-gray-300'>2</span>
                            <span className='text-2xl flex-1 flex justify-center cursor-pointer'>+</span>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <h2 className='text-xl md:text-5xl'>$254.22</h2>
                        <button className='bg-new-pink rounded-full text-white w-24 md:w-32 h-10 text-sm hover:bg-black duration-300'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickView