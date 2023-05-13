import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiQuery = createApi({
    reducerPath: 'apiQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://tamkar-shop.vercel.app',
        credentials: 'include',
        mode: 'cors'
    }),
    endpoints: () => ({})
})
