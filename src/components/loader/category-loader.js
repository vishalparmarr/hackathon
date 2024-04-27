import React from 'react';
import Loader from './loader';


// single category loader
function SingleSingleLoader ({loading}){
  return (
    <div
    className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center"
    style={{ height: "200px" }}
  >
    <Loader loading={loading} />
  </div>
  )
}

const CategoryLoader = ({loading}) => {
  return (
    <div className="row">
      <SingleSingleLoader loading={loading} />
      <SingleSingleLoader loading={loading} />
      <SingleSingleLoader loading={loading} />
      <SingleSingleLoader loading={loading} />
    </div>
  );
};

export default CategoryLoader;