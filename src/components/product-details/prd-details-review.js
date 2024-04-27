import React from "react";
// internal
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import ProductReviewItem from "./product-review-item";
import ReviewForm from "@components/forms/review-form";

// single rating bar
function SingleRatingBar({ text, progress }) {
  return (
    <div className="product-rating-bar-item d-flex align-items-center">
      <div className="product-rating-bar-text">
        <span>{text}</span>
      </div>
      <div className="product-rating-bar">
        <div className="single-progress" style={{ width: progress }}></div>
      </div>
    </div>
  );
}

const PrdDetailsReview = () => {
  return (
    <div className="product__details-review pt-60">
      <div className="row">
        <div className="col-xl-9">
          <div className="product__details-review-inner">
            <div className="product-rating">
              <h4 className="product-rating-title">Ratings and reviews</h4>
              <div className="product-rating-wrapper d-flex flex-wrap align-items-center mb-50">
                <div className="product-rating-number mr-40">
                  <h4 className="product-rating-number-title">4.5</h4>
                  <div className="product-rating-star">
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
                </div>
                <div className="product-rating-bar-wrapper">
                  <SingleRatingBar text="5" progress="70%" />
                  <SingleRatingBar text="4" progress="60%" />
                  <SingleRatingBar text="3" progress="40%" />
                  <SingleRatingBar text="2" progress="10%" />
                  <SingleRatingBar text="2" progress="25%" />
                </div>
              </div>
            </div>
            <div className="product__details-review-list mb-65">
              <ProductReviewItem
                user={user_1}
                name="Michelle Hunter"
                date="August 8, 2022"
                desc="I’m upgrading from a series 1, so it is a completely different
                  watch. I am very satisfied with this purchase. Most of the
                  heart monitoring functions only work with people."
              />
              <ProductReviewItem
                user={user_2}
                name="Sean Hathaway"
                date="August 10, 2022"
                desc="I’m upgrading from a series 1, so it is a completely different
                  watch. I am very satisfied with this purchase. Most of the
                  heart monitoring functions only work with people."
              />
            </div>
            <div className="product-review-form">
              <h3 className="product-review-form-title">Add a review</h3>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              {/* review form start */}
              <ReviewForm/>
              {/* review form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdDetailsReview;
