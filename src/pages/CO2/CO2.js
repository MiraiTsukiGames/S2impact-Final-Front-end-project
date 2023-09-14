import React from "react";
import Co2chart from "../../components/chart/Co2chart";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero from "../../components/hero/Hero";

const CO2 = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <section>
      <Hero title={"CO2"} description={t("co2description")} />
      <Co2chart />
      <Button text={"Home"} onClick={() => navigate("/")} />
    </section>
  );
};

export default CO2;
