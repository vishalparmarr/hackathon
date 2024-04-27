import React from "react";

const SingleFaq = ({ item }) => {
  const { title, desc, id, show, parent } = item || {};
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${show ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={show ? "true" : "false"}
          aria-controls={`collapse${id}`}
        >
          {title}
          <span className="accordion-btn"></span>
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${show ? "show" : ""}`}
        aria-labelledby={`heading${id}`}
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;
