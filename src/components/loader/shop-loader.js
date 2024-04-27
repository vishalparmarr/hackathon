import React from "react";
import Loader from "./loader";

// product single loader
function ProductSingleLoader({ loading }) {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "360px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

function SingleTop({loading}) {
  return (
    <div
      className="col-lg-6 col-md-5 d-flex align-items-center justify-content-center"
      style={{ height: "70px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const ShopLoader = ({ loading }) => {
  return (
    <div className="container fix">
      <div className="row">
        <SingleTop loading={loading}/>
        <SingleTop loading={loading}/>
      </div>
      {/*  */}
      <div className="row">
        <div className="col-lg-3"></div>
        <div className={`col-lg-9 order-first order-lg-last`}>
          <div className="row">
            <ProductSingleLoader loading={loading} />
            <ProductSingleLoader loading={loading} />
            <ProductSingleLoader loading={loading} />
            <ProductSingleLoader loading={loading} />
            <ProductSingleLoader loading={loading} />
            <ProductSingleLoader loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLoader;
