import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openOrCloseSearch } from '../../../slices/uiSlice'
import usePopupOpen from '../hooks/usePopupHook'

const SearchPopup = () => {
    const dispatch = useDispatch()
    const searchOpen = useSelector(state => state.ui.searchOpen)
    const {openLayer , move} = usePopupOpen(searchOpen)

  return (
    <div className={` ${openLayer ? 'flex bg-[rgba(0,0,0,0.6)] fixed z-20 w-full h-full' : 'hidden'} `}>
        <div className={`w-full h-40 lg:h-60 bg-white flex flex-col items-center duration-200 ${move ? 'translate-y-0' : '-translate-y-[100%]'}`}>
            <div className='w-full flex justify-end'>
                    <div className='bg-new-pink h-10 w-10 mr-5 rounded-b-xl flex justify-center items-center cursor-pointer'
                    onClick={() => dispatch(openOrCloseSearch(false))}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='w-[80%] flex flex-col gap-5'>
                    <p className='text-sm text-gray-400'>Start typing and press enter to search</p>
                    <div className='w-full relative h-[3.5rem]'>
                        <input type="text" 
                        className='border-[1px] border-solid border-new-pink rounded-xl pl-5 py-2 w-full h-full flex justify-start outline-none placeholder-new-pink'
                        placeholder='Search entire store...'/>
                        <div className='bg-new-pink h-full w-20 rounded-r-xl absolute top-0 right-0 flex justify-center items-center cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1} className="w-6 h-6 fill-white stroke-bs-orange">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default SearchPopup