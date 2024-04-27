import React from "react";

const OldNewPrice = ({originalPrice,discount}) => {
  return (
    <div className="product__price">
      <del className="product__ammount old-price">
        ${originalPrice.toFixed(2)}
      </del>
      <span className="product__ammount new-price">
        {" "}
        $
        {(
          Number(originalPrice) -
          (Number(originalPrice) * Number(discount)) / 100
        ).toFixed(2)}
      </span>
    </div>
  );
};

export default OldNewPrice;
