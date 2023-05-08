import React from 'react'
import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../modules/homeModule/components/Home'
import Shop from '../modules/shopModule/components/Shop'
import SingleProduct from '../modules/singleProduct/components/SingleProduct'
import CartPage from '../modules/cartModule/components/CartPage'
import CheckoutPage from '../modules/checkoutModule/components/CheckoutPage'
import LoginPage from '../modules/authModule/components/LoginPage'
import RegisterPage from '../modules/authModule/components/RegisterPage'
import DashboardAddItem from '../modules/dashboard/components/DashboardAddItem'
import { useSelector } from 'react-redux'
import UserProfileLayout from '../modules/userProfile/components/UserProfileLayout'
import UserAccount from '../modules/userProfile/components/UserAccount'
import UserOrders from '../modules/userProfile/components/UserOrders'
import SuccessBlock from '../modules/authModule/subComponents/SuccessBlock'

const useRouter = () => {
  const isAuthorized = useSelector(state => state.user.isAuthorized)
    const router = createBrowserRouter(createRoutesFromElements(
        <>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/shop/:categoriesId' element={<Shop/>}/>
              <Route path='/shop/:categoriesId/:productId' element={<SingleProduct/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              {!isAuthorized ?
              <>
              <Route path='/registration' element={<RegisterPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              </>
              : 
              <Route element={<UserProfileLayout/>} path='/user-account'>
                <Route element={<UserAccount/>} index/>
                <Route element={<UserOrders/>} path='/user-account/orders'/>
              </Route>
              }
              <Route path='/success' element={<SuccessBlock/>}/>
              <Route path='/checkout' element={<CheckoutPage/>}/>
          </Route>
          <Route path='/dashboard-add-items' element={<DashboardAddItem/>}/>
        </>
      ))
      return router
}

export default useRouter