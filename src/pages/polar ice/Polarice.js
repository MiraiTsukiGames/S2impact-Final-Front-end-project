import React from "react";
import PolarIceChart from "../../components/chart/Polaricechart/Polaricechart";
import Hero from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import style from "./Polarice.module.css";

const PolarIce = () => {
  const { t } = useTranslation();

  return (
    <section className={style.container}>
      <Hero title={t("polarice")} description={t("polaricedescription")} />
      <PolarIceChart />
    </section>
  );
};

export default PolarIce;
