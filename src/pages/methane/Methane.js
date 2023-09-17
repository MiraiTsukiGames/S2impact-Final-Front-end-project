import React from "react";
import MethaneChart from "../../components/chart/Methanechart/Methanechart";
import Hero from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import style from "./Methane.module.css";
import { Helmet } from "react-helmet-async";

const Methane = () => {
  const { t } = useTranslation();

  return (
    <section className={style.container}>
    <Helmet>
    <title>{t("methane")} {t("title3")}</title>
      <meta name="description" content="methane data" />
      <meta name="keywords" content="metano, grafico methano, methane, methane chart" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:title" content="Methane graph"/>
      <meta name="og:description" content="methane data"/>
      <meta name="og:image" content="assets/img/climate change logo.png"/>
      <meta name="twitter:title" content="Methane graph"/>
      <meta name="twitter:description" content="methane data"/>
      <meta name="twitter:image" content="assets/img/climate change logo.png"/>
    </Helmet>
      <Hero title={t("methane")} description={t("methanedescription")} />
      <MethaneChart />
    </section>
  );
};

export default Methane;
