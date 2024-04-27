import React, { useState } from "react";
// internal
import { Minus, Plus } from "@svg/index";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "src/redux/features/cartSlice";


const Quantity = () => {
  const dispatch = useDispatch();
  const {orderQuantity} = useSelector(state => state.cart);
  const [quantity,setQuantity] = useState(1);
  // handleIncrease
  const handleIncrease = () => {
    dispatch(increment())
  }
  // handleDecrease
  const handleDecrease = () => {
    dispatch(decrement())
  }
  return (
    <div className="product__details-quantity">
      <div className="tp-product-quantity mt-10 mb-10">
        <span className="tp-cart-minus" onClick={handleDecrease}>
          <Minus />
        </span>
        <input
          className="tp-cart-input"
          type="text"
          value={orderQuantity}
          readOnly
        />
        <span className="tp-cart-plus" onClick={handleIncrease}>
          <Plus />
        </span>
      </div>
    </div>
  );
};

export default Quantity;
