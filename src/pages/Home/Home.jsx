import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import Section1 from "./Sections/Section1/Section1";
import Section2 from "./Sections/Section2/Section2";
import Section3 from "./Sections/Section3/Section3";
import Section4 from "./Sections/Section4/Section4";

import { sections } from "../../data.js";
import "./Home.css";
import ScrollToTopButton from "../../component/ScrollToTopButton/ScrollToTopButton";

const Home = ({ user, deadline, isPassedDeadline }) => {
  const [pageSections, setPageSections] = useState([]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPageSections(sections);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //Render page at 0,0 scroll position after page redirects (login/register)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <React.Fragment>
      <Section1
        section1={pageSections[0]}
        user={user}
        deadline={deadline}
        isPassedDeadline={isPassedDeadline}
      />
      <Section2 section2={pageSections[1]} />
      <Section3 section3={pageSections[2]} />
      <Section4 section4={pageSections[3]} />
      {showScrollToTop && (
        <ScrollToTopButton handleScrollToTop={handleScrollToTop} />
      )}
    </React.Fragment>
  );
};

export default Home;
