import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiQuery = createApi({
    reducerPath: 'apiQuery',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tamkar-beauty-backend.onrender.com' }),
    endpoints: () => ({}),
  });