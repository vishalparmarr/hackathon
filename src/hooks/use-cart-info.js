import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCartInfo = () => {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const { cart_products } = useSelector((state) => state.cart);

    useEffect(() => {
        const cart = cart_products.reduce((cartTotal, cartItem) => {
        const { originalPrice, orderQuantity, discount } = cartItem;
        if (typeof orderQuantity !== "undefined") {
          if (discount && discount > 0) {
            // Calculate the item total with discount
            const itemTotal = (originalPrice - (originalPrice * discount) / 100) * orderQuantity;
            cartTotal.total += itemTotal;
          } else {
            // Calculate the item total without discount
            const itemTotal = originalPrice * orderQuantity;
            cartTotal.total += itemTotal;
          }
          cartTotal.quantity += orderQuantity;
        }
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      })
        setQuantity(cart.quantity);
        setTotal(cart.total);
    }, [cart_products])
    return {
        quantity,
        total,
        setTotal,
    }
}

export default useCartInfo;