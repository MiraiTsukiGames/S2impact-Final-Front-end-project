import React from "react";
import style from "./Footer.module.css";

export default function footer({ t }) {

  return (
    <footer className={style.footerContainer}>
      <div className={style.footerColor}>
        <p className={style.paragraph}>{t("text")}</p>
        <ul className={style.socials}>
          <li><a target="_blank" href="https://github.com/MiraiTsukiGames" rel="noopener noreferrer">Github</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/samantamancini/" rel="noopener noreferrer">linkedin</a></li>
          <li><a target="_blank" href="mailto:s.mancini93@hotmail.it" rel="noopener noreferrer">e-mail</a></li>
        </ul>
        <p className={style.copyright}>Copyright&copy; 2023 Samanta Mancini</p>
      </div>
    </footer>
  );
}
