import React from "react";

const ProductDetailsPrice = ({ price, discount }) => {
  return (
    <div className="product__details-price">
      {discount > 0 ? (
        <>
          <span className="product__details-ammount old-ammount">${price}</span>
          <span className="product__details-ammount new-ammount">
            $
            {(Number(price) - (Number(price) * Number(discount)) / 100).toFixed(
              2
            )}
          </span>
          <span className="product__details-offer">-{discount}%</span>
        </>
      ) : (
        <>
          <span className="product__details-ammount new-ammount">${price}</span>
        </>
      )}
    </div>
  );
};

export default ProductDetailsPrice;
