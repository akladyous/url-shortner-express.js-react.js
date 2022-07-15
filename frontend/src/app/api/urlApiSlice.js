import { tokenApiSlice } from "./tokenApiSlice.js";

export const urlApiSlice = tokenApiSlice.injectEndpoints({
    endpoints: build => ({
        getUrl: build.query({ query: (url) => `${url}` }),
        setUrl: build.mutation({
            query: ({ url, data }) => ({
                url: `${url}`,
                method: 'POST',
                body: { ...data },
            }),
            keepUnusedDataFor: 5
        }),
    }),
});

export const {
    useLazyGetUrlQuery,
    useGetUrlQuery,
    useSetUrlMutation,
} = urlApiSlice;