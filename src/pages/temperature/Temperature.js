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
