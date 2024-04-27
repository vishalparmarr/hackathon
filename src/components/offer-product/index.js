import React, { useState } from "react";
import Link from "next/link";
// internal
import ErrorMessage from "@components/error-message/error";
import ProductLoader from "@components/loader/product-loader";
import SingleCoupon from "./single-coupon";
import { useGetOfferCouponsQuery } from "src/redux/features/coupon/couponApi";

const OfferPopularProduct = () => {
  const [copiedCode, setCopiedCode] = useState("");
  const [copied, setCopied] = useState(false);


  const handleCopied = (code) => {
    setCopiedCode(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 3000);
  };

  const { data: offerCoupons, isError, isLoading } = useGetOfferCouponsQuery();
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <div className="p-relative">
        <ProductLoader loading={isLoading} />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <ErrorMessage message="There was an error" />;
  }

  if (!isLoading && !isError && offerCoupons?.length === 0) {
    content = <ErrorMessage message="No products found!" />;
  }

  if (!isLoading && !isError && offerCoupons?.length > 0) {
    const coupon_items = offerCoupons;
    content = (
      <div className="row">
        {coupon_items.map((coupon) => (
          <SingleCoupon
            key={coupon._id}
            coupon={coupon}
            handleCopied={handleCopied}
            copied={copied}
            copiedCode={copiedCode}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="product__coupon-area porduct__offer pt-120">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-md-6">
            <div className="section__title-wrapper-13 mb-35">
              <h3 className="section__title-13">Deal of The Day</h3>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="product__offer-btn mb-30 text-md-end">
              <Link href="/shop" className="tp-btn">
                View All Products
              </Link>
            </div>
          </div>
        </div>

        <div className="product__coupon-area pb-120">
          <div className="container">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default OfferPopularProduct;
