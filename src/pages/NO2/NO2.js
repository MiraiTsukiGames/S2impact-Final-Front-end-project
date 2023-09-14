import React from "react";
import No2Chart from "../../components/chart/No2chart";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/Hero";

const NO2 = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <section>
      <Hero title={"NO2"} description={t("no2description")} />
      <No2Chart />
      <Button text={"Home"} onClick={() => navigate("/")} />
    </section>
  );
};

export default NO2;
