import React, { useRef } from "react";
import ButtonAnimation from "../../components/button/ButtonAnimation";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import styles from "./Home.module.css";
import Cards from "../../components/cards/Cards";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const ref = useRef(null);

  const { t } = useTranslation();

  const handleScrollUp = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollDown = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <section ref={ref}>
    <Helmet>
      <title>Climate Change Alert</title>
      <meta name="description" content="Climate Change Alert graphs" />
      <meta name="keywords" content="allarme cambiamento climatico, cambiamento climatico, climate change" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:locale" content="it_IT"/>
      <meta name="og:type" content="website"/>
      <meta name="og:title" content="Climate Change Alert"/>
      <meta name="og:description" content="Climate Change Alert graphs"/>
      <meta property="og:site_name" content="Climate Change Alert"/>
      <meta name="og:image" content="https://climatechangealertnetlify.app/src/assets/img/climate change logo.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@Climate Change Alert"/>
      <meta name="twitter:title" content="Climate Change Alert"/>
      <meta name="twitter:description" content="Climate Change Alert graphs"/>
      <meta name="twitter:image" content="https://climatechangealertnetlify.app/src/assets/img/climate change logo.png"/>
    </Helmet>
      <div className={styles.banner}>
        <div className="home">
          <Hero title={t("title")} description={t("description1")} />
        </div>
        <ButtonAnimation onClick={handleScrollDown} icon="arrowDown" />
      </div>
      <Cards scroll={ref} />
      <div className={styles.buttonContainer}>
      <ButtonAnimation onClick={handleScrollUp} icon="arrowUp" />
      </div>
    </section>
  );
};

export default Home;
