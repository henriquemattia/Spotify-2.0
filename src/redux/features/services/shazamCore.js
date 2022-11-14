import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// 'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', 'fa06522dcemsheced693de9358e9p1db4b8jsn7368fbfd7e7d')
        return headers
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world' })
    })
})

export const {
  useGetTopChartsQuery,
} = shazamCoreApi
