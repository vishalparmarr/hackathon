import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coupon_info: undefined,
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    set_coupon: (state, { payload }) => {
      state.coupon_info = payload;
      localStorage.setItem(
        "couponInfo",
        JSON.stringify(payload)
      );
    },
    get_coupons: (state, { payload }) => {
      const data = localStorage.getItem('couponInfo');
      if (data) {
        state.coupon_info = JSON.parse(data);
      } else {
        state.coupon_info = undefined;
      }
      
    },
  },
});

export const { set_coupon,get_coupons } = couponSlice.actions;
export default couponSlice.reducer;
