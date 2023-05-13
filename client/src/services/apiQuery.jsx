import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiQuery = createApi({
    reducerPath: 'apiQuery',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://neon-halva-0a8681.netlify.app' }),
    endpoints: () => ({}),
  });