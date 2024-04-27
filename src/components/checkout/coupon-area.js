import React, { useState } from "react";
// internal
import CouponForm from "@components/forms/coupon-form";
import LoginForm from "@components/forms/login-form";

const CouponArea = (props) => {
  const [checkoutLogin, setCheckoutLogin] = useState(false);
  const [checkoutCoupon, setCheckoutCoupon] = useState(false);
  return (
    <section className="coupon-area pt-120 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Returning customer?{" "}
                <span
                  onClick={() => setCheckoutLogin(!checkoutLogin)}
                  id="showlogin"
                >
                  Click here to login
                </span>
              </h3>
              {checkoutLogin && (
                <div id="checkout-login" className="coupon-content">
                  <div className="coupon-info">
                    <p className="coupon-text">
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                      Cras sed est sit amet ipsum luctus.
                    </p>
                    {/* form start */}
                    <LoginForm />
                    {/* form end */}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Have a coupon?{" "}
                <span
                  onClick={() => setCheckoutCoupon(!checkoutCoupon)}
                  id="showcoupon"
                >
                  Click here to enter your code
                </span>
              </h3>
              {checkoutCoupon && (
                <div id="checkout_coupon" className="coupon-checkout-content">
                  <div className="coupon-info">
                    {/* info form start */}
                    <CouponForm {...props} />
                    {/* info form end */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponArea;
