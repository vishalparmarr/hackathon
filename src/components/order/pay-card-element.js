import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";

const PaymentCardElement = ({ stripe, cardError, cart_products,isCheckoutSubmit }) => {
  return (
    <div className="my-2">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="order-button-payment mt-25">
        <button
          type="submit"
          className="tp-btn"
          disabled={!stripe || cart_products.length === 0 || isCheckoutSubmit}
        >
          Place order
        </button>
      </div>
      {cardError && (
        <p className="mt-15" style={{ color: "red" }}>
          {cardError}
        </p>
      )}
    </div>
  );
};

export default PaymentCardElement;
