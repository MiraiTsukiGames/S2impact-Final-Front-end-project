import React from "react";
import PolarIceChart from "../../components/chart/Polaricechart/Polaricechart.js";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero.js";
import style from "./Polarice.module.css";

const PolarIce = ({ t }) => {

  return (
    <>
    {/* Metadata and title tag */}
      <Helmet>
      {/* Set the title for the page using translation */}
      <title>{t("polarice")} {t("title3")}</title>
      <meta name="description" content="arctic data" />
      <meta name="keywords" content="arctic chart, arctic, grafico ghiaccio artico, ghiaccio artico" />
      <meta name="author" content="Samanta Mancini"/>
    </Helmet>
    <section className={style.container}>
    <div className={style.heroContainer}>
    {/* Render the Hero component with translated title and description */}
      <Hero title={t("polarice")} description={t("polaricedescription")} />
      </div>
      {/* Render the PolarIceChart component */}
      <PolarIceChart />
    </section>
    </>
  );
};

export default PolarIce;
