import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import style from "./Footer.module.css";

export default function footer({ t }) {
  // Render footer
  return (
    <footer className={style.footerContainer}>
      {/* Horizontal line */}
      <hr />
      {/* Footer content render*/}
      <div className={style.footerContent}>
        <p className={style.paragraph}>{t("text")}</p>{" "}
        {/* Paragraph translation*/}
        <ul className={style.socials}>
          {" "}
          {/* Socials */}
          <li className={style.link}>
            <a
              target="_blank"
              href="https://github.com/MiraiTsukiGames"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className={style.link}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/samantamancini/"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className={style.link}>
            <a
              target="_blank"
              href="mailto:s.mancini93@hotmail.it"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.footerBottom}>
        {" "}
        {/* Copyright container */}
        <p className={style.copyRightText}>
          Copyright&copy; {new Date().getFullYear()} Samanta Mancini
        </p>
      </div>
    </footer>
  );
}
