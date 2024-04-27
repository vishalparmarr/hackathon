import React from "react";
import Loader from "./loader";

// offer single loader
function OfferSingleLoader({ loading }) {
  return (
    <div
      className="col-xl-6 col-md-6 d-flex align-items-center justify-content-center"
      style={{ height: "160px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const OfferLoader = ({ loading }) => {
  return (
    <div className="row">
      <OfferSingleLoader loading={loading} />
      <OfferSingleLoader loading={loading} />
      <OfferSingleLoader loading={loading} />
      <OfferSingleLoader loading={loading} />
    </div>
  );
};

export default OfferLoader;
