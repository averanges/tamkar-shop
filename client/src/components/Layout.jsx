import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import Cart from '../modules/homeModule/popups/Cart'
import SearchPopup from '../modules/homeModule/popups/SearchPopup'
import AddToCart from '../modules/homeModule/popups/AddToCart'
import AddToWishList from '../modules/homeModule/popups/AddToWishList'
import QuickView from '../modules/homeModule/popups/QuickView'
import HiddenMenu from '../modules/homeModule/popups/HiddenMenu'
import { Outlet } from 'react-router-dom'
import AddNewAddress from '../modules/userProfile/popups/AddNewAddress'

const Layout = () => {
    const cartOpen = useSelector(state => state.ui.cartOpen)
    const searchOpen = useSelector(state => state.ui.searchOpen)
    const addToCartData = useSelector(state => state.ui.addToCartData)
    const addToWishListData = useSelector(state => state.ui.addToWishListData)
    const quickViewOpened = useSelector(state => state.ui.quickViewOpened)
    const hiddenMenuOpened = useSelector(state => state.ui.hiddenMenuOpened)
  
    return (
      <div className='relative'>
        <AddToCart/>
        <SearchPopup/>
        <Cart/>
        <AddToWishList/>
        <QuickView/>
        <HiddenMenu/>
        <AddNewAddress/>
      <div className={`overflow-x-hidden relative duration-500 ${cartOpen || searchOpen || addToCartData.open ||
         addToWishListData.open || quickViewOpened.open  || hiddenMenuOpened ? 'blur-sm' : ''} `}>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout