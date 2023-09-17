import React from "react";
import Co2chart from "../../components/chart/CO2chart/Co2chart";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/Hero";
import style from "./CO2.module.css";
const CO2 = () => {
  const { t } = useTranslation();

  return (
    <section className={style.container}>
    <Helmet>
      <title>Co2 Chart</title>
      <meta name="description" content="dioxide carbon data"/>
    </Helmet>
      <div className={style.heroContainer}>
        <Hero title={"CO2"} description={t("co2description")} />
      </div>
      <Co2chart />
      <div className={style.buttonContainer}></div>
    </section>
  );
};

export default CO2;
