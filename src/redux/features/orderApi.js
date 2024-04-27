import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    // getUserOrders
    getUserOrders: builder.query({
      query: () => `/api/user-order/order-by-user`,
      keepUnusedDataFor: 600,
    }),
    // getUserOrders
    getUserOrderById: builder.query({
      query: (id) => `/api/user-order/single-order/${id}`,
      keepUnusedDataFor: 600,
    }),
  }),
});

export const {
  useGetUserOrdersQuery,
  useGetUserOrderByIdQuery,
} = authApi;
