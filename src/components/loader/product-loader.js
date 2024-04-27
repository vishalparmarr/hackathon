import React from "react";
import Loader from "./loader";

// product single loader
function ProductSingleLoader({ loading }) {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "360px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const ProductLoader = ({ loading }) => {
  return (
    <div className="container">
      <div className="row">
        <ProductSingleLoader loading={loading} />
        <ProductSingleLoader loading={loading} />
        <ProductSingleLoader loading={loading} />
        <ProductSingleLoader loading={loading} />
        <ProductSingleLoader loading={loading} />
        <ProductSingleLoader loading={loading} />
        <ProductSingleLoader loading={loading} />
        <ProductSingleLoader loading={loading} />
      </div>
    </div>
  );
};

export default ProductLoader;
