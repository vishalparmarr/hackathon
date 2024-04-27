import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// internal
import { Minus, Plus } from "@svg/index";
import { remove_wishlist_product } from "src/redux/features/wishlist-slice";
import {
  add_cart_product,
  quantityDecrement,
} from "src/redux/features/cartSlice";

const SingleWishlist = ({ item }) => {
  const { _id, image, title, originalPrice } = item || {};
  const { cart_products } = useSelector((state) => state.cart);
  const isAddToCart = cart_products.find((item) => item._id === _id);
  const dispatch = useDispatch();

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };

  // handle decrement product
  const handleDecrement = (prd) => {
    dispatch(quantityDecrement(prd));
  };

  // handleRemovePrd
  const handleRemovePrd = (prd) => {
    dispatch(remove_wishlist_product(prd));
  };

  // handleChange
  const handleChange = (e) => {};
  return (
    <tr>
      <td className="product-thumbnail">
        <Link href={`product-details/${_id}`}>
          <Image src={image} alt="cart img" width={125} height={125} />
        </Link>
      </td>
      <td className="product-name">
        <Link href={`product-details/${_id}`}>{title}</Link>
      </td>
      <td className="product-price">
        <span className="amount">${originalPrice}</span>
      </td>
      <td className="product-quantity">
        <div className="tp-product-quantity mt-10 mb-10">
          <span className="tp-cart-minus" onClick={() => handleDecrement(item)}>
            <Minus />
          </span>
          <input
            className="tp-cart-input"
            type="text"
            value={isAddToCart ? isAddToCart?.orderQuantity : 0}
            onChange={handleChange}
          />
          <span className="tp-cart-plus" onClick={() => handleAddProduct(item)}>
            <Plus />
          </span>
        </div>
      </td>
      <td className="product-subtotal">
        <span className="amount">
          $
          {isAddToCart?.orderQuantity
            ? (originalPrice * isAddToCart?.orderQuantity).toFixed(2)
            : (originalPrice * 0).toFixed(2)}
        </span>
      </td>
      <td className="product-remove">
        <button type="submit" onClick={() => handleRemovePrd(item)}>
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export default SingleWishlist;
