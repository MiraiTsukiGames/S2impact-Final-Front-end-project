import React from "react";
import No2Chart from "../../components/chart/NO2chart/No2chart";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero";
import style from "./NO2.module.css";

const NO2 = ({ t }) => {

  return (
    <>
    <Helmet>
      <title>NO2 {t("title3")}</title>
      <meta name="description" content="nitrous data" />
      <meta name="keywords" content="no2, no2 grafico, no2 chart" />
      <meta name="author" content="Samanta Mancini"/>
    </Helmet>
    <section className={style.container}>
    <div className={style.heroContainer}>
      <Hero title={"NO2"} description={t("no2description")} />
      </div>
      <No2Chart />
    </section>
    </>
  );
};

export default NO2;
