import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    credentials: "include",
})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    // endpoints: (build) => ({})
    endpoints: (build) => ({
        getData: build.query({ query: url => `${url}` }),
        setData: build.mutation({
            query: ({ url, data }) => ({
                url: `${url}`,
                method: 'POST',
                body: { ...data },
            })
        })
    })
});

export const {
    useLazyGetDataQuery,
    useGetDataQuery,
    useSetDataMutation,
} = apiSlice;