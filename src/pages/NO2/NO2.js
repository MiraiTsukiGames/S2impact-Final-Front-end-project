import React from "react";
import No2Chart from "../../components/chart/NO2chart/No2chart";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/Hero";
import style from "./NO2.module.css";

const NO2 = () => {
  const { t } = useTranslation();

  return (
    <section className={style.container}>
    <Helmet>
      <title>NO2 {t("title3")}</title>
      <meta name="description" content="nitrous data" />
      <meta name="keywords" content="no2, no2 grafico, no2 chart" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:locale" content="it_IT"/>
      <meta name="og:type" content="website"/>
      <meta name="og:title" content="No2 data"/>
      <meta name="og:description" content="nitrous data"/>
      <meta property="og:site_name" content="Climate Change Alert"/>
      <meta name="og:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@Climate Change Alert"/>
      <meta name="twitter:title" content="No2 data"/>
      <meta name="twitter:description" content="nitrous data"/>
      <meta name="twitter:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
    </Helmet>
    <div className={style.heroContainer}>
      <Hero title={"NO2"} description={t("no2description")} />
      </div>
      <No2Chart />
    </section>
  );
};

export default NO2;
