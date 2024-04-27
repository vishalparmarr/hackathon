import React from "react";
// internal

const PrdDetailsDescription = ({product}) => {
  return (
    <div className="product__details-description pt-95">
      <div className="row">
        <div className="col-lg-12">
          <div className="product__details-description-content">
            <h3 className="product-desc-title">{product?.title}</h3>
            <p>
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdDetailsDescription;
