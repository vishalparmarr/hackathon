import React, { useEffect, useState } from "react";
// internal
import SingleProduct from "@components/products/single-product";
import Pagination from "@ui/Pagination";

const ProductGridItems = ({ itemsPerPage, items, setShowingGridItems }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  // side effect
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    if (currentItems && setShowingGridItems) {
      setShowingGridItems(currentItems.length);
    }
  }, [currentItems, setShowingGridItems]);

  // handlePageClick
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="nav-grid"
        role="tabpanel"
        aria-labelledby="nav-grid-tab"
      >
        {/* shop grid*/}
        <div className="row">
          {currentItems &&
            currentItems.map((product) => (
              <div
                key={product._id}
                className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
              >
                <SingleProduct product={product} />
              </div>
            ))}
        </div>
      {/* pagination start */}
      <div className="row">
        <div className="col-xxl-12">
          <div className="tp-pagination tp-pagination-style-2">
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
      {/* pagination end */}
      </div>

    </>
  );
};

export default ProductGridItems;
