import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiQuery = createApi({
    reducerPath: 'apiQuery',
    baseQuery: fetchBaseQuery({ 
       baseUrl: 'https://tamkar-server.onrender.com'
     }),
    endpoints: () => ({}),
  });