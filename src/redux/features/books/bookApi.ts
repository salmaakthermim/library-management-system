import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["books"],
  endpoints: (build) => ({
   

    getBook: build.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getSingleBook: build.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),
    deleteBook: build.mutation({
      query: (_id) => ({
        url: `/books/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    addBook: build.mutation({
      query: (newBook) => ({
        url: `/books`,
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["books"],
    }),
    editBook: build.mutation({
      query: ({_id, ...patch}) => ({
        url: `/books/${_id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBookQuery, useDeleteBookMutation, useAddBookMutation ,useGetSingleBookQuery,useEditBookMutation} =
  bookApi;
