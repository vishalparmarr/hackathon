// frontend: OrderArea.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderDetails from "./order-details";
import OrderSingleCartItem from "./order-single-cart-item";
// import {addOrder} from "./controller/orderController";

const localProductIds = [];
const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const makePayment = async (productIds) => {
    return;
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  try {
    const cartData = JSON.parse(localStorage.getItem('cart_products'));
    const response = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: {cart: cartData} , total: cartData.total}),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch payment data");
    }

    const data = await response.json();

    const options = {
      name: "Harri Enterprices Pvt LTD",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank you for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        console.log("RZP",response.razorpay_payment_id);
        console.log("RZP",response.razorpay_order_id);
        console.log("RZP",response.razorpay_signature);

        console.log("Executing order" , productIds);
        
        // let res = addOrder(productIds);

        console.log("Order added successfully", res);

      },
      // prefill: {
      //   name: "Harri Enterprices Pvt Ltd",
      //   email: "example@gmail.com",
      //   contact: "9999999999",
      // },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error("Error making payment:", error);
    alert("Error making payment");
  }
};

const OrderArea = ({
  register,
  errors,
  discountAmount,
  shippingCost,
  cartTotal,
  handleShippingCost,
  setClientSecret,
  isCheckoutSubmit,
}) => {
  const { cart_products } = useSelector((state) => state.cart);
  // const [localProductIds, setLocalProductIds] = useState([]);

  useEffect(() => {
    cart_products.map((product) => {
      localProductIds.push(product._id);
    });

    // now after unmounting this compoonentn i want to clear the localProductIds array
    return () => {
      localProductIds.length = 0;
    };
  }, []);

  return (
    <div className="your-order mb-30 ">
      <h3>Your order</h3>
      <div className="your-order-table table-responsive">
        <table>
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total text-end">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart_products?.map((item, i) => (
              <OrderSingleCartItem
                key={i}
                title={item.title}
                quantity={item.quantity}
                price={item.originalPrice}
              />
            ))}
          </tbody>
          <tfoot>
            <OrderDetails
              register={register}
              errors={errors}
              discountAmount={discountAmount}
              cartTotal={cartTotal}
              shippingCost={shippingCost}
              handleShippingCost={handleShippingCost}
              setClientSecret={setClientSecret}
            />
          </tfoot>
        </table>
      </div>

      <div>
        <button className="checkout-btn product-add-cart-btn" onClick={() => makePayment(localProductIds)}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default OrderArea;
