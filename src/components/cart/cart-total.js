import Link from "next/link";
import React from "react";
// internal
import useCartInfo from "@hooks/use-cart-info";

const CartTotal = () => {
  const { total } = useCartInfo();
  return (
    <div className="cart-page-total">
      <h2>Cart totals</h2>
      <ul className="mb-20">
        <li>
          Subtotal <span>${total.toFixed(2)}</span>
        </li>
        <li>
          Total <span>${total.toFixed(2)}</span>
        </li>
      </ul>
      <Link href="/checkout" className="tp-btn cursor-pointer">
        Proceed to checkout
      </Link>
    </div>
  );
};

export default CartTotal;
