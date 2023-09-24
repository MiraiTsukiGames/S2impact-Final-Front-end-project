import React from "react";
import TemperatureChart from "../../components/chart/Temperaturechart/Temperaturechart";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero";
import style from "./Temperature.module.css";

const Temperature = ({ t }) => {

  return (
    <>
     <Helmet>
      <title>{t("Temperature")} {t("title3")}</title>
      <meta name="description" content="temperature data" />
      <meta name="keywords" content="temperature, temperature grafico, temperature chart" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:locale" content="it_IT"/>
      <meta name="og:type" content="website"/>
      <meta name="og:title" content="Temperature data"/>
      <meta name="og:description" content="temperature data"/>
      <meta property="og:site_name" content="Climate Change Alert"/>
      <meta name="og:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@Climate Change Alert"/>
      <meta name="twitter:title" content="Temperature data"/>
      <meta name="twitter:description" content="temperature data"/>
      <meta name="twitter:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
    </Helmet>

    <section className={style.container}>
    <div className={style.heroContainer}>
      <Hero
        title={t("Temperature")}
        description={t("temperaturedescription")}
      />
      </div>
      <TemperatureChart />
    </section>
    </>
  );
};

export default Temperature;
