import React from "react";
import MethaneChart from "../../components/chart/Methanechart/Methanechart";
import Hero from "../../components/hero/Hero";
import style from "./Methane.module.css";
import { Helmet } from "react-helmet-async";

const Methane = ({ t }) => {

  return (
    <>
    <Helmet>
      <title>{t("methane")} {t("title3")}</title>
      <meta name="description" content="methane data" />
      <meta name="keywords" content="methane chart, metano, metano grafico, methane" />
      <meta name="author" content="Samanta Mancini"/>
    </Helmet>
    <section className={style.container}>
      <Hero title={t("methane")} description={t("methanedescription")} />
      <MethaneChart />
    </section>
    </>
  );
};

export default Methane;
