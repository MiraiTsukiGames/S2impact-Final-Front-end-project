import React from "react";
import MethaneChart from "../../components/chart/Methanechart/Methanechart";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero";
import style from "./Methane.module.css";

const Methane = ({ t }) => {

  return (
    <>
    <Helmet>
    {/* Set the title for the page using translation */}
      <title>{t("methane")} {t("title3")}</title>
      <meta name="description" content="methane data" />
      <meta name="keywords" content="methane chart, metano, metano grafico, methane" />
      <meta name="author" content="Samanta Mancini"/>
    </Helmet>
    <section className={style.container}>
    {/* Render the Hero component with translated title and description */}
      <Hero title={t("methane")} description={t("methanedescription")} />
      {/* Render the MethaneChart component */}
      <MethaneChart />
    </section>
    </>
  );
};

export default Methane;
