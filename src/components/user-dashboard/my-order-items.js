import React, { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Pagination from "@ui/Pagination";

const MyOrderItems = ({ items, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  // side effect
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // handlePageClick
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Order Time</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, i) => (
              <tr key={i}>
                <th className="text-uppercase" scope="row">
                  {" "}
                  #{item?._id?.substring(20, 25)}
                </th>
                <td data-info="title">
                  {dayjs(item?.createdAt).format("MMMM D, YYYY")}
                </td>
                <td
                  data-info={`status ${
                    item?.status === "pending" ? "pending" : ""
                  }  
                ${item?.status === "processing" ? "hold" : ""} 
                ${item?.status === "delivered" ? "done" : ""}`}
                  className={`status ${
                    item?.status === "pending" ? "pending" : ""
                  }  
                ${item?.status === "processing" ? "hold" : ""} 
                ${item?.status === "delivered" ? "done" : ""}`}
                >
                  {item?.status}
                </td>
                <td>
                  <Link href={`/order/${item._id}`} className="tp-btn">
                    Invoice
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* pagination start */}
      {items.length > itemsPerPage && (
        <div className="mt-20 ml-20 tp-pagination tp-pagination-style-2">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      )}
      {/* pagination end */}
    </React.Fragment>
  );
};

export default MyOrderItems;
