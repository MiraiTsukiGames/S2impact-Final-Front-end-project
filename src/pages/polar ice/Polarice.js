import React from "react";
import PolarIceChart from "../../components/chart/Polaricechart/Polaricechart";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import style from "./Polarice.module.css";

const PolarIce = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <section className={style.container}>
      <Hero title={t("polarice")} description={t("polaricedescription")} />
      <PolarIceChart />
      <Button text={"Home"} onClick={() => navigate("/")} />
    </section>
  );
};

export default PolarIce;
