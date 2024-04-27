import React, { useEffect, useState } from "react";
// internal
import SingleListProduct from "@components/products/single-list-product";
import Pagination from "@ui/Pagination";

const ProductListItems = ({ itemsPerPage, items, setShowingListItems }) => {
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
    if (currentItems && setShowingListItems) {
      setShowingListItems(currentItems.length);
    }
  }, [currentItems, setShowingListItems]);

  // handlePageClick
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div
        className="tab-pane fade"
        id="nav-list"
        role="tabpanel"
        aria-labelledby="nav-list-tab"
      >
        <div className="product__list-wrapper mb-30">
          <div className="row">
            {currentItems &&
              currentItems.map((product) => (
                <div key={product._id} className="col-lg-12 col-md-6">
                  <SingleListProduct product={product} />
                </div>
              ))}
          </div>
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

export default ProductListItems;
