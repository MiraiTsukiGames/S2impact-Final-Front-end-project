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
  }, []);

  return (
    <>
      <Helmet>
      <title>Climate Change Alert</title>
      <meta name="description" content="Climate Change Alert graphs" />
      <meta name="keywords" content="allarme cambiamento climatico, cambiamento climatico, climate change" />
      <meta name="author" content="Samanta Mancini" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@”Climate_Change_Alert”" />
      <meta name="twitter:title" content="Climate_Change_Alert" />
      <meta name="twitter:description" content="Climate Change Alert graphs" />
      <meta name="twitter:creator" content="@Samanta_Mancini" />
      <meta name="twitter:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png" />
      <meta property="og:description" content="Climate Change Alert graphs" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/"/>
      <meta property="og:site_name" content="Climate Change Alert" />
      <meta property="og:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/logo.png" />
      <link rel="canonical" href="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/" />
      <meta property="og:title" content="Climate Change Alert" />
    </Helmet>
    <section ref={ref}>
      <div className={style.banner}>
        <div className="home">
          <Hero title={t("title")} description={t("description1")} />
        </div>
        <ButtonAnimation onClick={handleScrollDown} icon="arrowDown" />
      </div>
      <Cards scroll={ref} />
      <div className={`${style.buttonContainer} ${scrollTop > 0 ? "show" : "hide"}`}>
       <ButtonAnimation onClick={handleScrollUp} icon="arrowUp" />
      </div>
    </section>
    </>
  );
};

export default Home;
