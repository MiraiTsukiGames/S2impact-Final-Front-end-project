import React from "react";
import Co2chart from "../../components/chart/CO2chart/Co2chart";
import { Helmet } from 'react-helmet-async';
import Hero from "../../components/hero/Hero";
import style from "./CO2.module.css";
const CO2 = ({ t }) => {

  return (
    <>
    <Helmet>
    <title>Co2 {t("title3")}</title>
    <meta name="description" content="dioxide carbon data" />
    <meta name="keywords" content="co2, grafico, co2 chart" />
    <meta name="author" content="Samanta Mancini"/>
  </Helmet>
    <section className={style.container}>
      <div className={style.heroContainer}>
        <Hero title={"CO2"} description={t("co2description")} />
      </div>
      <Co2chart />
    </section>
    </>
  );
};

export default CO2;
