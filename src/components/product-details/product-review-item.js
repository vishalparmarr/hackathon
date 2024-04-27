import React from "react";
import Image from "next/image";

const ProductReviewItem = ({user,name,date,desc}) => {
  return (
    <div className="product-review-item">
      <div className="product-review-avater d-flex align-items-center">
        <div className="product-review-avater-thumb">
          <Image src={user} alt="user" />
        </div>
        <div className="product-review-avater-info">
          <h4 className="product-review-avater-title">{name}</h4>
        </div>
      </div>
      <div className="product-review-rating d-flex align-items-center">
        <div className="product-review-rating-wrapper d-flex">
          <span>
            <i className="icon_star"></i>
          </span>
          <span>
            <i className="icon_star"></i>
          </span>
          <span>
            <i className="icon_star"></i>
          </span>
          <span>
            <i className="icon_star"></i>
          </span>
          <span>
            <i className="icon_star_alt"></i>
          </span>
        </div>
        <div className="product-review-rating-date">
          <span>{date}</span>
        </div>
      </div>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default ProductReviewItem;
