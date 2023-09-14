import React from 'react';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Cards = ({ scroll }) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <>
      <h2 ref={scroll} className="text-center font-bold text-4xl mb-2 mt-40">{t("title2")}</h2>
      <div className="flex flex-wrap justify-between mt-20">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">CO2 {t("graph")}</h3>
            <p className="text-base text-left text-blue-900">
             {t("description2")}
            </p>
            <div className="px-6 py-4">
              <Button text={t("load")} onClick={() => navigate("co2")} />
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">Temperature {t("graph")}</h3>
            <p className="text-base text-left text-blue-900">
            {t("description3")}
            </p>
            <div className="px-6 py-4">
              <Button text={t("load")} onClick={() => navigate("temperature")} />
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">{t("methane")} {t("graph")}</h3>
            <p className="text-base text-left text-blue-900">
            {t("description4")}
            </p>
            <div className="px-6 py-4">
              <Button text={t("load")} onClick={() => navigate("methane")} />
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white text-blue-900">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">NO2 {t("graph")}</h3>
            <p className="text-base text-left text-blue-900">
            {t("description5")}
            </p>
            <div className="px-6 py-4">
              <Button text={t("load")} onClick={() => navigate("no2")} />
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">{t("polarice")} {t("graph")}</h3>
            <p className="text-base text-left text-blue-900">
            {t("description6")}
            </p>
            <div className="px-6 py-4">
              <Button text={t("load")} onClick={() => navigate("polarice")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
