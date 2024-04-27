import React from "react";
import Loader from "./loader";

// single loader
function SingleLoader({loading}) {
  return (
    <div style={{ height: "40px" }} className="mb-30">
      <Loader loading={loading} />
    </div>
  );
}

const ShopCategoryLoader = ({ loading }) => {
  return (
    <div>
      <SingleLoader loading={loading}/>
      <SingleLoader loading={loading}/>
      <SingleLoader loading={loading}/>
      <SingleLoader loading={loading}/>
      <SingleLoader loading={loading}/>
    </div>
  );
};

export default ShopCategoryLoader;
