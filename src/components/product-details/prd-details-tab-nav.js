import React from "react";

const PrdDetailsTabNav = () => {
  return (
    <nav>
      <div className="product__details-tab-nav-inner nav tp-tab-menu d-flex flex-sm-nowrap flex-wrap">
        <button className="nav-link active" id="nav-desc-tab" type="button">
          Description
        </button>
      </div>
    </nav>
  );
};

export default PrdDetailsTabNav;
