import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiQuery = createApi({
    reducerPath: 'apiQuery',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://tamkar-shop.vercel.app',
      prepareHeaders: (headers) => {
        headers.set('Access-Control-Allow-Credentials', 'true');
        headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGIN);
        return headers;
      },
    }),
    endpoints: () => ({}),
  });