import React, { useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
// internal
import OfferTimer from "./offer-timer";

const SingleCoupon = ({ coupon,handleCopied,copiedCode,copied }) => {

  return (
    <>
      <div className="col-xl-6">
        <div className="product__coupon-item mb-30 p-relative d-md-flex justify-content-between align-items-center">
          <span className="product__coupon-border"></span>
          <div className="product__coupon-item-left d-sm-flex align-items-center">
            <div className="product__coupon-thumb">
              <a href="#">
                <Image src={coupon.logo} alt="logo" width={120} height={120} />
              </a>
            </div>
            <div className="product__coupon-content">
              <h3 className="product__coupon-title">{coupon.title}</h3>
              <p className="product__coupon-offer mb-15">
                <span>{coupon.discountPercentage}%</span>Off
              </p>

              {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                <div className="product__coupon-countdown">
                  <div className="product__coupon-countdown-inner">
                    <ul>
                      <li>
                        <span data-days="">{0}</span> Day
                      </li>
                      <li>
                        <span data-hours="">{0}</span> Hrs
                      </li>
                      <li>
                        <span data-minutes="">{0}</span> Min
                      </li>
                      <li>
                        <span data-seconds="">{0}</span> Sec
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <OfferTimer expiryTimestamp={new Date(coupon.endTime)} />
              )}
            </div>
          </div>
          <div className="product__coupon-item-right pl-20">
            <div className="product__coupon-status mb-10 d-flex align-items-center">
              <h4>
                Coupon{" "}
                <span
                  className={
                    dayjs().isAfter(dayjs(coupon.endTime))
                      ? "in-active"
                      : "active"
                  }
                >
                  {dayjs().isAfter(dayjs(coupon.endTime))
                    ? "Inactive"
                    : "Active"}
                </span>
              </h4>
              <div className="product__coupon-info-details">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 1.5C4.99594 1.5 1.75 4.74594 1.75 8.75C1.75 12.7541 4.99594 16 9 16C13.0041 16 16.25 12.7541 16.25 8.75C16.25 4.74594 13.0041 1.5 9 1.5ZM0.25 8.75C0.25 3.91751 4.16751 0 9 0C13.8325 0 17.75 3.91751 17.75 8.75C17.75 13.5825 13.8325 17.5 9 17.5C4.16751 17.5 0.25 13.5825 0.25 8.75ZM9 7.75C9.55229 7.75 10 8.19771 10 8.75V11.95C10 12.5023 9.55229 12.95 9 12.95C8.44771 12.95 8 12.5023 8 11.95V8.75C8 8.19771 8.44771 7.75 9 7.75ZM9 4.5498C8.44771 4.5498 8 4.99752 8 5.5498C8 6.10209 8.44771 6.5498 9 6.5498H9.008C9.56028 6.5498 10.008 6.10209 10.008 5.5498C10.008 4.99752 9.56028 4.5498 9.008 4.5498H9Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="product__coupon-info-tooltip transition-3">
                  <p>
                    *This coupon code will apply on{" "}
                    <span>Grocery type products</span> and when you shopping
                    more than <span>${coupon.minimumAmount}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="product__coupon-date">
              <CopyToClipboard
                text={coupon.couponCode}
                onCopy={() => handleCopied(coupon.couponCode)}
              >
                <button>
                  {copied && coupon.couponCode === copiedCode ? (
                    <span>
                      Copied!
                    </span>
                  ) : (
                    <span>{coupon.couponCode}</span>
                  )}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCoupon;
