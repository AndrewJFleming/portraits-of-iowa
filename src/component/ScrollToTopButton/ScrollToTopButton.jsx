import React from "react";

import "./ScrollToTopButton.css";

const ScrollToTopButton = ({ handleScrollToTop }) => {
  return (
    <button onClick={handleScrollToTop} className="scroll-to-top">
      TOP &#129033;
    </button>
  );
};

export default ScrollToTopButton;
