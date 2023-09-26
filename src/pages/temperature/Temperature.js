import React from "react";
import TemperatureChart from "../../components/chart/Temperaturechart/Temperaturechart.js";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero.js";
import style from "./Temperature.module.css";

const Temperature = ({ t }) => {

  return (
    <>
    {/* Metadata and title tag */}
     <Helmet>
     {/* Set the title for the page using translation */}
      <title>{t("Temperature")} {t("title3")}</title>
      <meta name="description" content="temperature data" />
      <meta name="keywords" content="temperature, temperature grafico, temperature chart" />
      <meta name="author" content="Samanta Mancini"/>
    </Helmet>

    <section className={style.container}>
    <div className={style.heroContainer}>
     {/* Render the Hero component with translated title and description */}
      <Hero
        title={t("Temperature")}
        description={t("temperaturedescription")}
      />
      </div>
      {/* Render the TemperatureChart component */}
      <TemperatureChart />
    </section>
    </>
  );
};

export default Temperature;
