import { createSlice } from "@reduxjs/toolkit"

const token = JSON.parse(localStorage.getItem('AC'))
const localCardIds = localStorage.getItem('CAI')
const cardIdsTemp = localCardIds?.split('').find(el => el === '-') ? localCardIds?.split('-').map(el => el.split('.')) 
: localCardIds?.split('.')
const strId = cardIdsTemp?.every(el => typeof(el) === 'object') ? cardIdsTemp?.reduce((acc, el, idx) => {
    acc[el[0]] = Number(el[1])
    return acc
  }, {})
  : {[cardIdsTemp?.[0]]: Number(cardIdsTemp?.[1])}

const initialState = {
    openProductData : {},
    allItemsData: [],
    chosenToOpenProductId: null,
    allCardData: localCardIds ? strId : {},
    isAuthorized: token ? true : false,
    authToken: token ? token : null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addProductData: (state, action) => {
            state.openProductData = action.payload
        },
        chooseToOpenProductId: (state, action) => {
            state.chosenToOpenProductId = action.payload
        },
        addToCard: (state, action) => {
            const existKey = state?.allCardData && Object.keys(state?.allCardData).find(el => el === action.payload.id)
            if(!state.allCardData) {
                state.allCardData = action.payload
            }
            if (existKey){
                state.allCardData[existKey] += action.payload.chosenAmount
            }else if(!existKey) {
                const {id, chosenAmount} = action.payload
                state.allCardData = {...state.allCardData, [id]: chosenAmount}
            }
            const str = Object.entries(state.allCardData).map(el => el.join('.')).join('-')
            localStorage.setItem('CAI', str)
        },
        changeAddToCardAmount: (state, action) => {
            const {id, type} = action.payload
            // const existCartItem = Object.entries(state.allCardData).find((el, idx, arr) => el[0] === id)
            // console.log(existCartItem)
            if(type === 'plus') {
                state.allCardData[id] += 1
            }
            if (type === 'minus' && state.allCardData[id] > 0) {
                state.allCardData[id] -= 1
            }
            if(type === 'minus' && state.allCardData[id] === 0) {
                delete state.allCardData[id]
            }
            if(type === 'delete') {
                delete state.allCardData[id]
            }
            const str = Object.entries(state.allCardData).map(el => el.join('.')).join('-')
            localStorage.setItem('CAI', str)
        },
        logout: (state, action) => {
            state.isAuthorized = false
            localStorage.removeItem('AC')
        },
        login: (state,action) => {
            state.isAuthorized = true
            state.authToken = action.payload
            if (!token && action.payload) {
              localStorage.setItem('AC', JSON.stringify(action.payload))
            }
        }
    },
})

export const {addProductDat, chooseToOpenProductId, addToCard, changeAddToCardAmount, logout, login} = userSlice.actions

export default userSlice.reducer