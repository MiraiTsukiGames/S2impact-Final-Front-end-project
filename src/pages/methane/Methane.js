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
      <meta name="keywords" content="methane chart, metano, metano grafico, methane" />
      <meta name="author" content="Samanta Mancini"/>
      <meta name="og:locale" content="it_IT"/>
      <meta name="og:type" content="website"/>
      <meta name="og:title" content="Methane"/>
      <meta name="og:description" content="methane data"/>
      <meta property="og:site_name" content="Climate Change Alert"/>
      <meta name="og:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@Climate Change Alert"/>
      <meta name="twitter:title" content="Methane data"/>
      <meta name="twitter:description" content="methane data"/>
      <meta name="twitter:image" content="https://miraitsukigames.github.io/S2impact-Final-Front-end-project/src/assets/img/climatelogo.png"/>
    </Helmet>
      <Hero title={t("methane")} description={t("methanedescription")} />
      <MethaneChart />
    </section>
  );
};

export default Methane;
