import React, { useEffect } from "react";
import BackToTop from "@lib/back-to-top";

function BackToTopCom({ className }) {
  useEffect(() => {
    BackToTop(".back-to-top-wrapper");
  },[]);
  return (
    <div className={`back-to-top-wrapper ${className || ""}`}>
      <button id="back_to_top" type="button" className="back-to-top-btn">
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default BackToTopCom;
