import React from "react";
import Co2chart from "../../components/chart/CO2chart/Co2chart.js";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero.js";
import style from "./CO2.module.css";

const CO2 = ({ t }) => {
  return (
    <>
      {/* Metadata and title tag */}
      <Helmet>
        {/* Set the title for the page using translation */}
        <title>Co2 {t("title3")}</title>
        <meta name="description" content="dioxide carbon data" />
        <meta name="keywords" content="co2, grafico, co2 chart" />
        <meta name="author" content="Samanta Mancini" />
      </Helmet>
      <section className={style.container}>
        <div className={style.heroContainer}>
          {/* Render the Hero component with title and description */}
          <Hero title={"CO2"} description={t("co2description")} />
        </div>
        {/* Render the Co2chart component */}
        <Co2chart />
      </section>
    </>
  );
};

export default CO2;
