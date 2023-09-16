import React from "react";
import No2Chart from "../../components/chart/NO2chart/No2chart";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/Hero";
import style from "./NO2.module.css";

const NO2 = () => {
  const { t } = useTranslation();

  return (
    <section className={style.container}>
      <Hero title={"NO2"} description={t("no2description")} />
      <No2Chart />
    </section>
  );
};

export default NO2;
