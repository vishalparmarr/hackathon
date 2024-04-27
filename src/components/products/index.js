import React, { useState } from "react";
// internal
import SingleProduct from "./single-product";
import ErrorMessage from "@components/error-message/error";
import ProductLoader from "@components/loader/product-loader";
import { useGetShowingProductsQuery } from "src/redux/features/productApi";
// internal

// tab items
const tabs = ["top-rated", "best-selling", "latest-product"];

const ShopProducts = () => {
  const { data: products, isError, isLoading } = useGetShowingProductsQuery();
  const [activeTab, setActiveTab] = useState("top-rated");
  // handle tab product
  const handleTabProduct = (value) => {
    setActiveTab(value);
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <ProductLoader loading={isLoading} />
    );
  }

  if (!isLoading && isError) {
    content = <ErrorMessage message="There was an error" />;
  }

  if (!isLoading && !isError && products?.products?.length === 0) {
    content = <ErrorMessage message="No products found!" />;
  }

  if (!isLoading && !isError && products?.products?.length > 0) {
    const prd_items = products.products;
    const show_prd = prd_items.filter((item) => item.itemInfo === activeTab);
    content = show_prd.map((product) => (
      <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <SingleProduct product={product} />
      </div>
    ));
  }
  return (
    <>
      <section className={`product__popular-area pb-20`}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="section__title-wrapper-13 mb-35">
                <h3 className="section__title-13">Products</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="product__tab tp-tab  mb-35">
                <ul
                  className="nav nav-tabs justify-content-md-end"
                  id="productTab"
                >
                  {tabs.map((tab, i) => (
                    <li
                      key={i}
                      className="nav-item"
                      onClick={() => handleTabProduct(tab)}
                    >
                      <button
                        className={`nav-link text-capitalize ${
                          activeTab === tab ? "active" : ""
                        }`}
                        id="top-tab"
                        type="button"
                      >
                        {tab.split("-").join(" ")}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="product__tab-wrapper">
            <div className="row">{content}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopProducts;
