import React from 'react'

const ImagesBlock = ({data, chosenImg, setChosenImg}) => {
    
    const mappedImages = data?.additionalImages?.map((el, idx) => <img key={idx}
        className={`cursor-pointer ${data?.mainImg === el && 'border-[1px] border-black'}`} src={el} 
        onClick={() => setChosenImg(el)}/>)
  return (
    <div className='flex-1 flex justify-center items-center w-full h-full'>
    {(data?.additionalImages && data?.additionalImages?.length > 1)  && 
    <div className={`flex flex-col gap-5 w-[10%] justify-center duration-1000 
    ${chosenImg ? 'opacity-100' : 'opacity-0'}`}>
        {mappedImages}
    </div>}
    <div className='flex justify-center w-[90%] h-full rounded-lg'>
        <div className='w-[90%] relative justify-center'>
            <img src={chosenImg} alt="" 
            className={`w-full md:bg-cover md:h-full duration-1000 ${chosenImg ? 'opacity-100' : 'opacity-0'}`}/>
           {(data.additionalImages.length > 1) &&
           (<>
            <div onClick={() => setChosenImg(data?.additionalImages?.indexOf(chosenImg) === 0 ? data.additionalImages[data?.additionalImages.length - 1] : data.additionalImages[data.additionalImages.indexOf(chosenImg) - 1])}
                className='absolute w-12 h-12 rounded-full bg-white top-[75%] shadow-xl flex justify-center items-center cursor-pointer group/edit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover/edit:animate-opacity-effect duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div onClick={() => setChosenImg(data?.additionalImages?.indexOf(chosenImg) === (data?.additionalImages.length - 1) ? data.additionalImages[0] : data.additionalImages[data.additionalImages.indexOf(chosenImg) + 1])}
                className='absolute w-12 h-12 rounded-full bg-white top-[75%] right-0 shadow-xl flex justify-center items-center cursor-pointer group/edit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover/edit:animate-opacity-effect">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </>
            )}
        </div>
    </div>
</div>
  )
}

export default ImagesBlock