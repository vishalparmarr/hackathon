import { apiSlice } from "../../api/apiSlice";
import { set_client_secret } from "./orderSlice";


export const authApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "api/order/create-payment-intent",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(set_client_secret(result.clientSecret));
        } catch (err) {
          // do nothing
        }
      },

    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "api/order/addOrder",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if(result){
            localStorage.removeItem("couponInfo");
            localStorage.removeItem("cart_products");
            localStorage.removeItem("shipping_info");
          }
        } catch (err) {
          // do nothing
        }
      },

    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useAddOrderMutation,
} = authApi;
