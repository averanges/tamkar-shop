import React from 'react'
import usePopupOpen from '../../homeModule/hooks/usePopupHook'
import { useSelector } from 'react-redux'
import SaveAddressFrom from '../subComponents/SaveAddressFrom'

const AddNewAddress = ({}) => {
   const addNewAddressOpened = useSelector(state => state.ui.addNewAddressOpened)
    const {openLayer , move} = usePopupOpen(addNewAddressOpened)
  return (
    <div className={` ${openLayer ? 'flex justify-center items-center bg-[rgba(0,0,0,0.6)] fixed z-20 w-screen h-screen' : 'hidden'} `}>
        <div className={`bg-white w-3/6  duration-300 ${move ? 'translate-y-0 opacity-100' : '-translate-y-[30%] opacity-0'}`}>
          <SaveAddressFrom/>
        </div>
    </div>
  )
}

export default AddNewAddress