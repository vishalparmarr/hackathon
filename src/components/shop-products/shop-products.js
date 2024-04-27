import React, { useState } from "react";
// internal
import products from "@data/products";
import SingleProduct from "./single-product";
import SectionWrapper from "@elements/section-wrapper";
// internal

// products data
const top_rated_products = products.filter((product) => product.topRated);
// tab items
const tabs = ["Top Rated", "Best Selling", "Latest Products"];

const ShopProducts = ({ element_style = false }) => {
  const [productItems, setProductItems] = useState(top_rated_products);
  const [activeTab, setActiveTab] = useState("Top Rated");
  // handle tab product
  const handleTabProduct = (value) => {
    setActiveTab(value);
    switch (value) {
      case "Top Rated":
        return setProductItems(top_rated_products);
      case "Best Selling":
        const bestProducts = products.filter((prd) => prd.bestSelling);
        return setProductItems(bestProducts);
      case "Latest Products":
        const latestProducts = products.filter((prd) => prd.latestProduct);
        return setProductItems(latestProducts);
      default:
        return setProductItems(top_rated_products);
    }
  };
  return (
    <>
      <section
        className={`product__popular-area ${
          element_style ? "pt-110" : ""
        } pb-20`}
      >
        <div className="container">
          {!element_style && (
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="section__title-wrapper-13 mb-35">
                  <h3 className="section__title-13">Popular Products</h3>
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
                          className={`nav-link ${
                            activeTab === tab ? "active" : ""
                          }`}
                          id="top-tab"
                          type="button"
                        >
                          {tab}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {element_style && (
            <SectionWrapper
              title="Minimal & Clean Design"
              subtitle="Shop Product Grid"
            />
          )}

          <div className="product__tab-wrapper">
            <div className="row">
              {productItems.map((product) => (
                <div
                  key={product.id}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  <SingleProduct product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopProducts;
