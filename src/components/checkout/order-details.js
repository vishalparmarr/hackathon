import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// internal
import useCartInfo from "@hooks/use-cart-info";
import ErrorMessage from "@components/error-message/error";

const OrderDetails = ({
  register,
  errors,
  handleShippingCost,
  cartTotal,
  shippingCost,
  discountAmount,
}) => {
  const { total } = useCartInfo();

  return (
    <React.Fragment>
      <tr className="cart-subtotal">
        <th>Cart Subtotal</th>
        <td className="text-end">
          <span className="amount text-end">${total}</span>
        </td>
      </tr>
      <tr className="shipping">
        <th>Shipping</th>
        <td className="text-end">
          <ul>
            <li>
              <input
                {...register(`shippingOption`, {
                  required: `Shipping Option is required!`,
                })}
                id="flat_shipping"
                type="radio"
                name="shippingOption"
              />
              <label
                onClick={() => handleShippingCost(60)}
                htmlFor="flat_shipping"
              >
                <span className="amount">Delivery: Today Cost : $60.00</span>
              </label>
              <ErrorMessage message={errors?.shippingOption?.message} />
            </li>

            <li>
              <input
                {...register(`shippingOption`, {
                  required: `Shipping Option is required!`,
                })}
                id="free_shipping"
                type="radio"
                name="shippingOption"
              />
              <label
                onClick={() => handleShippingCost(20)}
                htmlFor="free_shipping"
              >
                Delivery: 7 Days Cost : $20.00
              </label>
              <ErrorMessage message={errors?.shippingOption?.message} />
            </li>
          </ul>
        </td>
      </tr>

      <tr className="shipping">
        <th>Sub Total</th>
        <td className="text-end">
          <strong>
            <span className="amount">${total}</span>
          </strong>
        </td>
      </tr>

      <tr className="shipping">
        <th>Shipping Cost</th>
        <td className="text-end">
          <strong>
            <span className="amount">${shippingCost}</span>
          </strong>
        </td>
      </tr>

      <tr className="shipping">
        <th>Discount</th>
        <td className="text-end">
          <strong>
            <span className="amount">${discountAmount.toFixed(2)}</span>
          </strong>
        </td>
      </tr>

      <tr className="order-total">
        <th>Total Order</th>
        <td className="text-end">
          <strong>
            <span className="amount">${cartTotal}</span>
          </strong>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default OrderDetails;
