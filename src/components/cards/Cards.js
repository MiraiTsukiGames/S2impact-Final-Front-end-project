import React from "react";
import Button from "../button/Button.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./Cards.module.css";

const Cards = ({ scroll }) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <>
      <h2 ref={scroll} className={style.subtitle}>
        {t("title2")}
      </h2>
      <div className={style.cardContainer}>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>CO2 {t("graph")}</h3>
          <p className={style.cardDescription}>{t("description2")}</p>
          <Button text={t("load")} onClick={() => navigate("co2")} />
        </div>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>Temperature {t("graph")}</h3>
          <p className={style.cardDescription}>{t("description3")}</p>
          <Button text={t("load")} onClick={() => navigate("temperature")} />
        </div>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>
            {t("methane")} {t("graph")}
          </h3>
          <p className={style.cardDescription}>{t("description4")}</p>
          <Button text={t("load")} onClick={() => navigate("methane")} />
        </div>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>NO2 {t("graph")}</h3>
          <p className={style.cardDescription}>{t("description5")}</p>
          <Button text={t("load")} onClick={() => navigate("no2")} />
        </div>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>
            {t("polarice")} {t("graph")}
          </h3>
          <p className={style.cardDescription}>{t("description6")}</p>
          <Button text={t("load")} onClick={() => navigate("polarice")} />
        </div>
      </div>
    </>
  );
};

export default Cards;
