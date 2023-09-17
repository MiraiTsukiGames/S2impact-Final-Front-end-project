import React from "react";
import PolarIceChart from "../../components/chart/Polaricechart/Polaricechart";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import style from "./Polarice.module.css";

const PolarIce = () => {
  const { t } = useTranslation();

  return (
    <section className={style.container}>
    <Helmet>
      <title>{t("polarice")} {t("title3")}</title>
      <meta name="description" content="arctic data" />
      <meta name="keywords" content="arctic chart, arctic, grafico ghiaccio artico, ghiaccio artico" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:locale" content="it_IT"/>
      <meta name="og:type" content="website"/>
      <meta name="og:title" content="Polar ice data"/>
      <meta name="og:description" content="arctic data"/>
      <meta property="og:site_name" content="Climate Change Alert"/>
      <meta name="og:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@Climate Change Alert"/>
      <meta name="twitter:title" content="Polar ice data"/>
      <meta name="twitter:description" content="arctic data"/>
      <meta name="twitter:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
    </Helmet>
      <Hero title={t("polarice")} description={t("polaricedescription")} />
      <PolarIceChart />
    </section>
  );
};

export default PolarIce;
