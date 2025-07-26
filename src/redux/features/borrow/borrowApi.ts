import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-system-server-psi.vercel.app",
  }),
  tagTypes: ["borrow"],
  endpoints: (build) => ({
    addBorrow: build.mutation({
      query: (newBorrow) => ({
        url: `/borrow`,
        method: "POST",
        body: newBorrow,
      }),
      invalidatesTags: ["borrow"],
    }),
    getBorrow: build.query({
      query: () => "/borrow/borrow-summary",
      providesTags: ["borrow"],
    }),
  }),
});

export const { useAddBorrowMutation, useGetBorrowQuery } = borrowApi;
