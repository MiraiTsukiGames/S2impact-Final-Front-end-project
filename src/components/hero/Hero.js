import React from "react";
import Title from "../title/Title";
import style from "./Hero.module.css";

export default function Hero({ title, description }) {
  return (
    <article>
      {/* Title and description render */}
      <div className={style.container}>
        <div className={style.title}>
          <Title text={title} />
        </div>
        <div className={style.description}>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
