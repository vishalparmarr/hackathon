import React from "react";
import { NextArrow, PrevArrow } from "@svg/index";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount, focusPage }) => {
  return (
    <ReactPaginate
      nextLabel={
        <span className="next page-numbers">
          Next{" "}<NextArrow />
        </span>
      }
      previousLabel={
        <span className="tp-pagination-prev prev page-numbers">
          <PrevArrow />{" "}Prev
        </span>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      forcePage={focusPage}
      pageCount={pageCount}
      pageClassName="page-items"
      pageLinkClassName="page-links"
      previousClassName="page-items"
      previousLinkClassName="page-links"
      nextClassName="page-items"
      nextLinkClassName="page-links"
      breakLabel="..."
      breakClassName="page-items"
      breakLinkClassName="page-links"
      containerClassName="paginasstions"
      activeClassName="current"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
