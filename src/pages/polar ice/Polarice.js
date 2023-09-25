import React from "react";
import PolarIceChart from "../../components/chart/Polaricechart/Polaricechart";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero";
import style from "./Polarice.module.css";

const PolarIce = ({ t }) => {

  return (
    <>
      <Helmet>
      <title>{t("polarice")} {t("title3")}</title>
      <meta name="description" content="arctic data" />
      <meta name="keywords" content="arctic chart, arctic, grafico ghiaccio artico, ghiaccio artico" />
      <meta name="author" content="Samanta Mancini"/>
    </Helmet>
    <section className={style.container}>
    <div className={style.heroContainer}>
      <Hero title={t("polarice")} description={t("polaricedescription")} />
      </div>
      <PolarIceChart />
    </section>
    </>
  );
};

export default PolarIce;
