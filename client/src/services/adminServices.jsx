import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const app = axios.create({baseURL: 'http://localhost:5000/admin'})

export const addNewItem = createAsyncThunk('admin/addNewItem', async (data) => {
    console.log(data)
    const response = await app.post('/new-items', data)
    console.log(response.data)
    return response.data
})