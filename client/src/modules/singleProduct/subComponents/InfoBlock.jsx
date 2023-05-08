import React, { useRef, useState } from 'react'

const InfoBlock = ({open, title, data}) => {
    const [openedGridLoading, setOpenedGridLoading] = useState(false)
    const [openedGridPlusOrMinus, setOpenedGridPlusOrMinus] = useState(true)
    const [openedGrid, setOpenedGrid] = useState(false)
    const dataRef = useRef(null)
    const handlePlusClick = (e) => {
        if(dataRef.current === e.target) {
            return
        }
        setOpenedGridLoading(true)
        setOpenedGrid(prevOpenGrid => !prevOpenGrid)
        setTimeout(() =>{ 
            setOpenedGridPlusOrMinus(prevGrid => !prevGrid)
            setOpenedGridLoading(false)
        },500)
    }
  return (
    <div onClick={(e) => handlePlusClick(e)}
    className={`border-y-[1px] border-gray-200 py-8 relative flex flex-col w-full gap-5 ${openedGrid && 'text-new-pink'}`} >
        <div className='flex justify-between items-center cursor-pointer'>
            <h4 className='hover:text-new-pink'>{title}</h4>
            <div
            className={`${openedGridPlusOrMinus ? '' : ''} ${openedGridLoading && 'animate-spin'}`}>
                {openedGridPlusOrMinus ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            : 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>}
            </div>
        </div>
        <p ref={dataRef}
        className={`${openedGrid ? 'flex' : 'absolute opacity-0 -z-10'} ${openedGrid && 'duration-700'} text-black`}>{data}</p>
    </div>
  )
}

export default InfoBlock