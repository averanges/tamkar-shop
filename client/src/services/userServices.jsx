import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const app = axios.create({baseURL: 'http://localhost:5000/'})

export const getAllItems = createAsyncThunk('user/getAllItems', async () => {
    const response = await app.get('/all-items')
    return response.data
})
export const getSingleProduct = createAsyncThunk('user/getSingleProduct', async (_id) => {
    const response = await app.get('/single-item', ({params: {_id}}))
    return response.data
})