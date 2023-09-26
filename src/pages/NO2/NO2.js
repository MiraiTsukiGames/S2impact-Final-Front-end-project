import React from "react";
import No2Chart from "../../components/chart/NO2chart/No2chart.js";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero.js";
import style from "./NO2.module.css";

const NO2 = ({ t }) => {

  return (
    <>
    {/* Metadata and title tag */}
    <Helmet>
    {/* Set the title for the page using translation */}
      <title>NO2 {t("title3")}</title>
      <meta name="description" content="nitrous data" />
      <meta name="keywords" content="no2, no2 grafico, no2 chart" />
      <meta name="author" content="Samanta Mancini"/>
    </Helmet>
    <section className={style.container}>
    <div className={style.heroContainer}>
    {/* Render the Hero component with translated title and description */}
      <Hero title={"NO2"} description={t("no2description")} />
      </div>
      {/* Render the No2Chart component */}
      <No2Chart />
    </section>
    </>
  );
};

export default NO2;
