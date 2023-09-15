import React from "react";
import TemperatureChart from "../../components/chart/Temperaturechart/Temperaturechart";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";
import style from "./Temperature.module.css";

const Temperature = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <section className={style.container}>
      <Hero
        title={t("Temperature")}
        description={t("temperaturedescription")}
      />
      <TemperatureChart />
      <Button text={"Home"} onClick={() => navigate("/")} />
    </section>
  );
};

export default Temperature;
