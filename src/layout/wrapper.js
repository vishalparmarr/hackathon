import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// internal
import Loader from "@components/loader/loader";
import useAuthCheck from "@hooks/use-auth-check";
import BackToTopCom from "@components/common/scroll-to-top";
import { get_wishlist_products } from "src/redux/features/wishlist-slice";
import { get_cart_products } from "src/redux/features/cartSlice";
import { get_coupons } from "src/redux/features/coupon/couponSlice";
import { get_shipping } from "src/redux/features/order/orderSlice";
import ProductModal from "@components/common/modals/product-modal";

const Wrapper = ({ children }) => {
  const { product, isShow } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const authChecked = useAuthCheck();
  useEffect(() => {
    dispatch(get_wishlist_products());
    dispatch(get_cart_products());
    dispatch(get_coupons());
    dispatch(get_shipping());
  }, [dispatch]);
  return (
    <>
      {!authChecked ? (
        <div
          // className="d-flex align-items-center justify-content-center"
          className="max-w-screen-xl mx-auto px-4"
          style={{ height: "100vh" }}
        >
          <Loader loading={!authChecked} />
        </div>
      ) : (
        children
      )}

      <BackToTopCom />
      {isShow && <ProductModal product={product} />}
    </>
  );
};

export default Wrapper;
