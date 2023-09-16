import React from "react";
import MethaneChart from "../../components/chart/Methanechart/Methanechart";
import Hero from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import style from "./Methane.module.css";

const Methane = () => {

  const { t } = useTranslation();

  return (
    <section className={style.container}>
      <Hero title={t("methane")} description={t("methanedescription")} />
      <MethaneChart />
    </section>
  );
};

export default Methane;
