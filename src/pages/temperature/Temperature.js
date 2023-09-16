import React from "react";
import TemperatureChart from "../../components/chart/Temperaturechart/Temperaturechart";
import Hero from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import style from "./Temperature.module.css";

const Temperature = () => {

  const { t } = useTranslation();

  return (
    <section className={style.container}>
      <Hero
        title={t("Temperature")}
        description={t("temperaturedescription")}
      />
      <TemperatureChart />
    </section>
  );
};

export default Temperature;
