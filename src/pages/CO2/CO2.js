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
      <meta name="description" content="dioxide carbon data"/>
      <meta name="keywords" content="co2, grafico co2, co2 chart" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:title" content="Co2 graph"/>
      <meta name="og:description" content="dioxide carbon data"/>
      <meta name="og:image" content="assets/img/climate change logo.png"/>
      <meta name="twitter:title" content="Co2 graph"/>
      <meta name="twitter:description" content="dioxide carbon data"/>
      <meta name="twitter:image" content="https://miraitsukigithub.io/src/assets/img/climate change logo.png"/>
    </Helmet>
      <div className={style.heroContainer}>
        <Hero title={"CO2"} description={t("co2description")} />
      </div>
      <Co2chart />
      <div className={style.buttonContainer}></div>
    </section>
  );
};

export default CO2;
