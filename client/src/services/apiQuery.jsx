import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiQuery = createApi({
    reducerPath: 'apiQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.VERCEL_URL,
        credentials: 'include',
        mode: 'cors'
    }),
    endpoints: () => ({})
})
