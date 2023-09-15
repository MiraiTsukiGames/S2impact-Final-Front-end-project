import React from "react";
import MethaneChart from "../../components/chart/Methanechart/Methanechart";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import { useTranslation } from "react-i18next";

const Methane = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <section>
      <Hero title={t("methane")} description={t("methanedescription")} />
      <MethaneChart />
      <Button text={"Home"} onClick={() => navigate("/")} />
    </section>
  );
};

export default Methane;
