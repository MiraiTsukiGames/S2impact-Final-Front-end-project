import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import style from "./Footer.module.css";

export default function footer({ t }) {

  return (
    <footer className={style.footerContainer}>
    <hr />
    <div className={style.footerContent}>
      <p className={style.paragraph}>{t("text")}</p>
      <ul className={style.socials}>
        <li className={style.link}>
          <a target="_blank" href="https://github.com/MiraiTsukiGames" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li className={style.link}>
          <a target="_blank" href="https://www.linkedin.com/in/samantamancini/" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li className={style.link}>
          <a target="_blank" href="mailto:s.mancini93@hotmail.it" rel="noreferrer">
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </div>
    <div className={style.footerBottom}>
      <p className={style.copyRightText}>Copyright&copy; {new Date().getFullYear()} Samanta Mancini</p>
    </div>
  </footer>
  );
}
