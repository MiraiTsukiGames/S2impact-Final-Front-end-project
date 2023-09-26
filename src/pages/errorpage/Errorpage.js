import React from 'react';
import { Helmet } from "react-helmet-async";
import "./Errorpage.css";

export default function ErrorPage({ t }) {
  return (
    <>
    {/* title */}
    <Helmet>
    <title>Error-404</title>
  </Helmet>
    <section>
      <div className="banner">
        <div className="home">
        {/* Render the error message */}
        <h1 className="error">404 - {t("error")}</h1>
        {/* Render the page not found message */}
        <p className="text">{t("page404")}</p>
        </div>
      </div>
    </section>
    </>
  )
}
