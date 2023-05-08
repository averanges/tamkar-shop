import React from 'react'
import Stars from '../../../UI/stars/Stars'

const Review = () => {
  return (
    <div className='bg-gray-100 w-full h-fit p-5 rounded-2xl flex flex-col gap-5'>
        <div className='flex items-center gap-10'>
            <div className='min-w-[4rem] min-h-[4rem] h-[4rem] w-[4rem] bg-white rounded-full flex justify-center items-center'>
                <h2 className='text-4xl'>N</h2>
            </div>
            <h2 className='text-xl'>Tomas Doe</h2>
            <Stars/>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ipsum deleniti dolore ullam doloremque harum distinctio! Vitae ullam est voluptatem necessitatibus dolores facilis eligendi, fugiat, voluptatibus nostrum et inventore quidem?</p>
    </div>
  )
}

export default Review