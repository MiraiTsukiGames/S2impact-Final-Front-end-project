import React, { useRef, useEffect, useState } from "react";
import ButtonAnimation from "../../components/button/ButtonAnimation.js";
import { Helmet } from "react-helmet-async";
import Cards from "../../components/cards/Cards.js";
import Hero from "../../components/hero/Hero.js";
import style from "./Home.module.css";

const Home = ({ t }) => {
  // Ref to scroll into view
  const ref = useRef(null);

  // State to track scroll position
  const [scrollTop, setScrollTop] = useState(0);

  // Function to scroll up to the top
  const handleScrollUp = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Function to scroll down to the end
  const handleScrollDown = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  // Effect to update scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Metadata and title tag */}
      <Helmet>
        <title>Climate Change Alert</title>
        <meta name="description" content="Climate Change Alert graphs" />
        <meta
          name="keywords"
          content="allarme cambiamento climatico, cambiamento climatico, climate change"
        />
        <meta name="author" content="Samanta Mancini" />
      </Helmet>
      <section ref={ref}>
        <div className={style.banner}>
          <div className="home">
            {/* Render the Hero component with title and description */}
            <Hero title={t("title")} description={t("description1")} />
          </div>
          {/* Render the ButtonAnimation component for scrolling down */}
          <ButtonAnimation onClick={handleScrollDown} icon="arrowDown" />
        </div>
        {/* Render the Cards component with scroll prop */}
        <Cards scroll={ref} />
        {/* Show scroll up button when scrollTop is greater than 800 */}
        {/* Render the Cards component with scroll prop */}
        <Cards scroll={ref} />
        {/* Show scroll up button when scrollTop is greater than 800 */}
        <div className={`${scrollTop > 800 ? style.show : style.hide}`}>
          {/* Render the ButtonAnimation component for scrolling up */}
          <ButtonAnimation onClick={handleScrollUp} icon="arrowUp" />
        </div>
      </section>
    </>
  );
};

export default Home;
