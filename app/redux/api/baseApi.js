import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://concerned-crow-fedora.cyclic.app",
  }),
  endpoints: (builder) => ({
    getDuas: builder.query({
      query: () => "/duas",
    }),
    getDuasByCatIdAndSubCatId: builder.query({
      query: ({ cat_id, subcat_id }) =>
        `/duas?cat_id=${cat_id}&subcat_id=${subcat_id}`,
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getSubCategories: builder.query({
      query: () => "/sub-categories",
    }),
    getSubCategoriesById: builder.query({
      query: (cat_id) => `/sub-categories?cat_id=${cat_id}`,
    }),
  }),
});

export const {
  useGetDuasQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetSubCategoriesByIdQuery,
  useGetDuasByCatIdAndSubCatIdQuery,
} = baseApi;

export default baseApi;
