import React from "react";

const SingleCategory = ({ category, index }) => {
  return (
    <div className="card">
      <div className="card-header white-bg" id={`category-${index+1}`}>
        <h5 className="mb-0">
          <button
            className="shop-accordion-btn"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${index+1}`}
            aria-expanded={index === 0 ? "true" : "false"}
            aria-controls={`#collapse-${index+1}`}
          >
            {category}
          </button>
        </h5>
      </div>

      <div
        id={`#collapse-${index+1}`}
        className="collapse"
        aria-labelledby={`category-${index+1}`}
        data-bs-parent="#accordion"
      >
        <div className="card-body">
          <div className="categories__list">
            <ul>
              <li>
                <a href="#">Catagories 1</a>
              </li>
              <li>
                <a href="#">Catagories 2</a>
              </li>
              <li>
                <a href="#">Catagories 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
