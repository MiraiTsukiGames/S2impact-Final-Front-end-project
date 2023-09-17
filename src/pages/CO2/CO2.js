import React from "react";
import Co2chart from "../../components/chart/CO2chart/Co2chart";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/Hero";
import style from "./CO2.module.css";
const CO2 = () => {
  const { t } = useTranslation();

  return (
    <section className={style.container}>
    <Helmet>
      <title>Co2 {t("title3")}</title>
      <meta name="description" content="dioxide carbon data" />
      <meta name="keywords" content="co2, grafico, co2 chart" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:locale" content="it_IT"/>
      <meta name="og:type" content="website"/>
      <meta name="og:title" content="Co2"/>
      <meta name="og:description" content="dioxide carbon data"/>
      <meta property="og:site_name" content="Climate Change Alert"/>
      <meta name="og:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@Climate Change Alert"/>
      <meta name="twitter:title" content="@Co2 data"/>
      <meta name="twitter:description" content="dioxide carbon data"/>
      <meta name="twitter:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
    </Helmet>
      <div className={style.heroContainer}>
        <Hero title={"CO2"} description={t("co2description")} />
      </div>
      <Co2chart />
    </section>
  );
};

export default CO2;
