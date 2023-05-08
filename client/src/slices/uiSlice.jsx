import { createSlice } from "@reduxjs/toolkit"

const body = document.querySelector('body')
const checkBody = (payload) => {
    if (payload === true) {
        body.style.overflowY = 'hidden'
    }
    else {
        body.style.overflowY = 'scroll'
    }
}


const initialState = {
    isObserved: true,
    homeImgObserved: false,
    cartOpen: false,
    searchOpen: false,
    addToCartData: {},
    addToWishListData: {},
    quickViewOpened: {},
    hiddenMenuOpened: false,
    notInHome: false,
    addNewAddressOpened: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        handleIsObserved: (state, action) => {
            state.isObserved = action.payload
        },
        handleHomeImgObserved: (state, action) => {
            if(state.homeImgObserved === false) {
            state.homeImgObserved = action.payload
            }
        },
        openOrCloseCart: (state, action) => {
            state.cartOpen = action.payload
            checkBody(action.payload)
        },
        openHiddenMenu: (state, action) => {
            state.hiddenMenuOpened = action.payload
            checkBody(action.payload)
        },
        openAddToCart: (state, action) => {
            state.addToCartData = action.payload
            checkBody(action?.payload?.open)
        },
        openOrCloseSearch: (state, action) => {
            state.searchOpen = action.payload
            checkBody(action.payload)
        },
        openAddToWishList: (state, action) => {
            state.addToWishListData = action.payload
            checkBody(action?.payload?.open)
        },
        openQuickView: (state, action) => {
            state.quickViewOpened = action.payload 
            checkBody(action?.payload?.open)
        },
        openAddNewAddress: (state, action) => {
            state.addNewAddressOpened = action.payload 
            checkBody(action?.payload)
        },
        switchNotInHome: (state, action) => {
            state.notInHome = action.payload
        },
    }
})

export const { handleIsObserved, handleHomeImgObserved, openOrCloseCart, openOrCloseSearch, openAddToCart,
    openAddToWishList, openQuickView, openHiddenMenu, switchNotInHome, openAddNewAddress } = uiSlice.actions

export default uiSlice.reducer