import React, { useState } from "react";
// internal
import BillingDetails from "./billing-details";
import OrderArea from "./order-area";

const CheckoutArea = ({ handleSubmit, submitHandler, ...others }) => {
  // Assuming cartData is parsed from localStorage 'cart_products' string.
  const cartData = JSON.parse(localStorage.getItem('cart_products'));
  let baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  baseUrl = baseUrl.replace(/#.*/g, "").trim();   


  let customImages = [];
  try {
    customImages = cartData && cartData.length > 0 ? cartData[0].customImages : [];
    customImages = customImages.map((image) => baseUrl + '/uploads/' + image);
  } catch (error) { 
  }
  

  return (
    <section className="checkout-area pb-85">
      <div className="container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="row">
            <div className="col-lg-6">
              <div className="checkbox-form">
                <h3>Billing Details</h3>
                {/* billing details start */}
                <BillingDetails {...others} />
                {/* billing details end */}
              </div>
            </div>
            <div className="col-lg-6">
              {/* order area start */}
              <OrderArea {...others} />
              {/* Custom Images Preview Section */}
              <div className="custom-image-previews your-order mb-30" style={{display: (customImages ? (customImages.length > 0 ? "block" : "none"): "")}}>
                <h5>Custom Images</h5>
                {
                  customImages ?customImages.map((image, index) => (
                    <img key={index} src={image} alt={`Custom Image ${index + 1}`} style={{ maxWidth: "100px", marginRight: "10px" }} />
                  )) : ""
                }
              </div>
              {/* order area end */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutArea;
