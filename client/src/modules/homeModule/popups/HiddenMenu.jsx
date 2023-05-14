import React  from 'react'
import { openHiddenMenu, openOrCloseCart } from '../../../slices/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import usePopupOpen from '../hooks/usePopupHook'
import { useNavLinks } from '../hooks/useNavLinks'

const HiddenMenu = () => {
    const hiddenMenuOpened = useSelector(state => state.ui.hiddenMenuOpened)
    const dispatch = useDispatch()
    const {openLayer , move} = usePopupOpen(hiddenMenuOpened)
    const navLinks = useNavLinks()
  return (
    <div className={` ${openLayer ? 'flex justify-start bg-[rgba(0,0,0,0.6)] fixed z-20 w-full h-full' : 'hidden'} `}>
        <div className={`bg-white text-black h-full w-72 lg:w-96 duration-300 ease-linear gap-10 flex flex-col items-center ${move ? 'translate-x-0' : '-translate-x-[100%]'}`}>
            <div className='bg-new-pink w-full flex justify-between h-16 text-white items-center cursor-pointer px-5 hover:bg-black duration-300'
            onClick={() => dispatch(openHiddenMenu(false))}
            >
                <h2 className='text-md font-semibold'>MENU</h2>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
            </div>
            <div className='flex flex-col justify-start w-full pl-5 gap-5 text-lg'>
                {navLinks}
            </div>
        </div>
    </div>
  )
}

export default HiddenMenu