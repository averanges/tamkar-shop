import { createSlice } from "@reduxjs/toolkit"
import { addNewItem } from "../services/adminServices"

const initialState = {
    items: []
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: {
        [addNewItem.fulfilled] : (state, action) => {
            state.items = state.items.push(action.payload)
        }
    }
})


export default adminSlice.reducer