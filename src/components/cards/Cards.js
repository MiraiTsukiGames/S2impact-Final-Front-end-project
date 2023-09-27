import React from "react";
import Button from "../button/Button.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./Cards.module.css";

// Cards function
const Cards = ({ scroll }) => {
  const navigate = useNavigate(); // useNavigation

  const { t } = useTranslation(); // useTranslation

  return (
    <>
      <h2 ref={scroll} className={style.subtitle}>
        {t("title2")} {/* Title fetched from translation */}
      </h2>
      <div className={style.cardContainer}>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>CO2 {t("graph")}</h3>
          {/* Title Co2 fetched from translation */}
          <p className={style.cardDescription}>{t("description2")}</p>
          {/* Description Co2 fetched from translation */}
          <Button text={t("load")} onClick={() => navigate("co2")} />
          {/* Button text fetched from translation and navigate co2 page*/}
        </div>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>Temperature {t("graph")}</h3>
          {/* Title Temperature fetched from translation */}
          <p className={style.cardDescription}>{t("description3")}</p>
          {/* Description Temperature fetched from translation */}
          <Button
            text={t("load")}
            onClick={() => navigate("temperature")}
          />
          {/* Button text fetched from translation and navigate temperature page*/}
        </div>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>
            {t("methane")} {t("graph")}
          </h3>
          {/* Title Methane fetched from translation */}
          <p className={style.cardDescription}>{t("description4")}</p>
          {/* Description Methane fetched from translation */}
          <Button text={t("load")} onClick={() => navigate("methane")} />
          {/* Button text fetched from translation and navigate methane page*/}
        </div>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>NO2 {t("graph")}</h3>
          {/* Title No2 fetched from translation */}
          <p className={style.cardDescription}>{t("description5")}</p>
          {/* Description No2 fetched from translation */}
          <Button text={t("load")} onClick={() => navigate("no2")} />
          {/* Button text fetched from translation and navigate no2 page*/}
        </div>
        <div className={style.cardBody}>
          <h3 className={style.titleCard}>
            {t("polarice")} {t("graph")}
          </h3>
          {/* Title Polar ice fetched from translation */}
          <p className={style.cardDescription}>{t("description6")}</p>
          {/* Description Polar ice fetched from translation */}
          <Button text={t("load")} onClick={() => navigate("polarice")} />
          {/* Button text fetched from translation and navigate polar ice page*/}
        </div>
      </div>
    </>
  );
};

export default Cards;
