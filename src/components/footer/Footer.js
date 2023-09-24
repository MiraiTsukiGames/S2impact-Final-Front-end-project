import React from "react";
import style from "./Footer.module.css";

export default function footer({ t }) {

  return (
    <footer className={style.footerContainer}>
      <div className={style.footerColor}>
        <p className={style.paragraph}>{t("text")}</p>
        <ul>
          <li><a href="https://miraitsukigames.github.io">Github</a></li>
          <li><a href=""></a>linkedin</li>
          <li><a href=""></a>e-mail</li>
        </ul>
        <p className={style.copyright}>Copyright&copy; 2023 Samanta Mancini</p>
      </div>
    </footer>
  );
}
