import React from 'react'
import { useDispatch } from 'react-redux'
import { changeAddToCardAmount } from '../../../slices/userSlice'

const CartItem = ({data}) => {
  const dispatch = useDispatch()
  return (
    <tr>
          <td onClick={() => dispatch(changeAddToCardAmount({id: data._id, type: 'delete'}))}
          className='w-fit h-fit border-[1px] border-gray-300 lg:p-5 cursor-pointer px-3'>X</td>
          <td className='border-[1px] border-gray-300 lg:w-32'>
            <img src={data?.mainImg} alt="" className='w-32'/>
          </td>
          <td className='w-fit h-fit border-[1px] border-gray-300 lg:p-5 '>{data?.title}</td>
          <td className='w-fit h-fit border-[1px] border-gray-300 lg:p-5'>${data?.price.toFixed(1) + '0'}</td>
          <td className='lg:p-5 lg:h-[10.1rem] h-20 border-b-[1px] border-gray-300 flex justify-center items-center'>
            <div className='lg:w-40 lg:h-14 w-full flex justify-center items-center shadow-inner rounded-full gap-2 lg:gap-5'>
                <span onClick={() => dispatch(changeAddToCardAmount({id: data._id, type: 'minus'}))}
                className='border-r-[1px] border-gray-300 text-4xl lg:pr-5 cursor-pointer pr-1'>-</span>
                <span className='text-xl'>{data?.chosenAmount}</span>
                <span onClick={() => dispatch(changeAddToCardAmount({id: data._id, type: 'plus'}))}
                className='border-l-[1px] border-gray-300 text-2xl lg:pl-5 pl-1 cursor-pointer'>+</span>
            </div>
            </td>
          <td className='w-fit h-fit border-[1px] border-gray-300 lg:p-5'>${(data?.price * data?.chosenAmount).toFixed(1) + '0'}</td>
    </tr>
  )
}

export default CartItem