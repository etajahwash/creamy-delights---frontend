import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productIdApi = createApi({
    reducerPath: 'productIdApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
    endpoints: (builder) => ({
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
    }),
});

export const { useGetProductByIdQuery } = productIdApi;
