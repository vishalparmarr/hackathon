import React, { useState } from "react";
import { useRouter } from "next/router";
// internal
import { Search } from "@svg/index";

const ShopModel = ({ all_products }) => {
  let all_brands = [...new Set(all_products.map((prd) => prd.brand?.name))];
  const [brands, setBrands] = useState(all_brands);
  const [isChecked, setIsChecked] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  // handle brand
  const handleBrand = (value) => {
    if (isChecked === value) {
      setIsChecked("");
      router.push(`/shop`);
    } else {
      setIsChecked(value);
      router.push(
        `/shop?brand=${value
          .toLowerCase()
          .replace("&", "")
          .split(" ")
          .join("-")}`
      );
    }
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      let searchBrands = all_brands.filter((b) =>
        b.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setBrands(searchBrands);
    } else {
      setBrands(all_brands);
    }
  };

  // handle search value
  const handleSearchValue = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <div className="accordion" id="shop_model">
      <div className="accordion-item">
        <h2 className="accordion-header" id="model__widget">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#model_widget_collapse"
            aria-expanded="true"
            aria-controls="model_widget_collapse"
          >
            Brands
          </button>
        </h2>
        <div
          id="model_widget_collapse"
          className="accordion-collapse collapse show"
          aria-labelledby="model__widget"
          data-bs-parent="#shop_model"
        >
          <div className="accordion-body">
            <div className="shop__widget-search pt-10 pb-25">
              <form onSubmit={handleSubmit}>
                <div className="shop__widget-search-input">
                  <input
                    onChange={handleSearchValue}
                    type="text"
                    placeholder="Search brands"
                  />
                  <button type="submit">
                    <Search />
                  </button>
                </div>
              </form>
            </div>
            <div
              className="shop__widget-list"
              style={{
                height: brands.length > 2 && "120px",
                overflowY: "auto",
              }}
            >
              {brands.map((brand, i) => (
                <div key={i} className="shop__widget-list-item">
                  <input
                    type="checkbox"
                    id={brand}
                    checked={
                      router.query.brand ===
                      brand.toLowerCase().replace("&", "").split(" ").join("-")
                        ? "checked"
                        : false
                    }
                    readOnly
                  />
                  <label onClick={() => handleBrand(brand)} htmlFor={brand}>
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModel;
