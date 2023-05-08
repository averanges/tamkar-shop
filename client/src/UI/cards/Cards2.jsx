import React from 'react'
import Pr1 from '../../assets/pr1.png'
import Pr2 from '../../assets/pr2.png'
import Pr3 from '../../assets/pr3.png'
import Pr4 from '../../assets/pr4.png'
import Pr5 from '../../assets/pr5.png'
import Pr6 from '../../assets/pr6.png'
import Stars from '../stars/Stars'


class bestProduct {
    color;
    img;
    isNew;

    constructor(c,i,isNew) {
        this.color = c;
        this.img = i;
        this.isNew = isNew;
    }
}


const pr4 = new bestProduct('#FFEACC', Pr4, true)
const pr5 = new bestProduct('#FFDAE0', Pr5, true)
const pr6 = new bestProduct('#FFF3DA', Pr6, true)

const arrOfProducts = [pr4,pr5,pr6].map((el,idx)=> 
   <div className='flex flex-col' key={idx} >
        <div className='rounded-2xl cursor-pointer group/change relative' style={{backgroundColor: el.color}}>
            {el.isNew && <span className='text-white bg-bs-orange w-fit h-fit rounded-2xl py-1 px-5 absolute top-5 right-5'>New</span>}
            <img className='group-hover/change:scale-105 duration-500' src={el.img} alt="" />
            <div className='flex justify-around w-full absolute bottom-10 translate-y-10 opacity-0 group-hover/change:translate-y-0 group-hover/change:opacity-100 duration-500 ease-linear'>
                <div  className='p-2 border-2 border-solid border-bs-orange rounded-full w-fit h-fit bg-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>
                <div className='py-3 px-10 border-2 border-solid border-bs-orange rounded-full w-fit h-fit bg-white flex justify-center items-center'>Add to cart</div>
                <div className=' border-2 border-solid border-bs-orange rounded-full w-fit h-fit p-2 bg-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-5 mt-3'>
            <div className='flex justify-between'>
                <Stars/>
                <p className='text-sm text-gray-400 italic'>150 reviews</p>
            </div>
            <h2 className='text-xl cursor-pointer hover:text-bs-orange duration-500'>Readable content DX22</h2>
            <div className='flex gap-5 items-end'>
                <h2 className='text-xl'>$260.00</h2>
                <span className='text-sm line-through text-gray-400'>$300.00</span>
            </div>
        </div>
    </div>
    )

const Cards2 = () => {

  return (
    <>{arrOfProducts}</>
  )
}

export default Cards2