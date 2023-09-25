import React from 'react';
import { Helmet } from "react-helmet-async";
import "./Errorpage.css";

export default function ErrorPage() {
  return (
    <>
    <Helmet>
    <title>Page not found</title>
  </Helmet>
    <section>
      <div className="banner">
        <div className="home">
        <h1 className="error">404 - Pagina non trovata</h1>
        <p className="text">La pagina che stai cercando non è disponibile.</p>
        </div>
      </div>
    </section>
    </>
  )
}
