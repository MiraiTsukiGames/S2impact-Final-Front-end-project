import React, { useRef } from "react";
import ButtonAnimation from "../../components/button/ButtonAnimation";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import styles from "./Home.module.css";
import Cards from "../../components/cards/Cards";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const Ref = useRef(null);

  const { t } = useTranslation();

  const handleClick = () => {
    Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
    <Helmet>
      <title>Climate Change Alert</title>
      <meta name="description" content="Climate Change Alert graphs" />
      <meta name="keywords" content="allarme cambiamento climatico, cambiamento climatico, climate change" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:title" content="Climate Change Alert"/>
      <meta name="og:description" content="Climate Change Alert graphs"/>
      <meta name="og:image" content="URL dell'immagine Open Graph"/>
      <meta name="twitter:title" content="Climate Change Alert"/>
      <meta name="twitter:description" content="Climate Change Alert graphs"/>
      <meta name="twitter:image" content="URL dell'immagine Twitter"/>
    </Helmet>
      <div className={styles.banner}>
        <div className="home">
          <Hero title={t("title")} description={t("description1")} />
        </div>
        <ButtonAnimation onClick={handleClick} />
      </div>
      <Cards scroll={Ref} />
    </section>
  );
};

export default Home;
