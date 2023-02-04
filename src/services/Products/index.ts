import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IListResponse } from "./IListResponse";
import { IProduct } from "./IProduct";

export const rowsPerPage = 5;

export const PRODUCTS_API_REDUCER_KEY = "productsApi";
export const productsApi = createApi({
  reducerPath: PRODUCTS_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (build) => ({
    listProducts: build.query<IListResponse<IProduct>, number | void>({
      query: (page = 1) => `products?per_page=${rowsPerPage}&page=${page}`,
    }),
  }),
  refetchOnMountOrArgChange: 60,
});

export const { useListProductsQuery } = productsApi;
