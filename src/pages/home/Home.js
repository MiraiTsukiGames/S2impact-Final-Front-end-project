import React, { useRef, useEffect, useState } from "react";
import ButtonAnimation from "../../components/button/ButtonAnimation";
import { Helmet } from "react-helmet-async";
import style from "./Home.module.css";
import Cards from "../../components/cards/Cards";
import Hero from "../../components/hero/Hero";

const Home = ({ t }) => {
  const ref = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScrollUp = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollDown = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  return (
    <>
      <Helmet>
      <title>Climate Change Alert</title>
      <meta name="description" content="Climate Change Alert graphs" />
      <meta name="keywords" content="allarme cambiamento climatico, cambiamento climatico, climate change" />
      <meta name="author" content="Samanta Mancini" />
    </Helmet>
    <section ref={ref}>
      <div className={style.banner}>
        <div className="home">
          <Hero title={t("title")} description={t("description1")} />
        </div>
        <ButtonAnimation onClick={handleScrollDown} icon="arrowDown" />
      </div>
      <Cards scroll={ref} />
      <div className={`${scrollTop > 800 ? style.show : style.hide}`}>
       <ButtonAnimation onClick={handleScrollUp} icon="arrowUp" />
      </div>
    </section>
    </>
  );
};

export default Home;
