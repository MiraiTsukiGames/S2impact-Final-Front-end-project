import React, { useRef } from "react";
import ButtonAnimation from "../../components/button/ButtonAnimation";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import Cards from "../../components/cards/Cards";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const Ref = useRef(null);

  const { t } = useTranslation();

  const handleClick = () => {
    Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.home}>
          <Hero title={t("title")} description={t("description1")} />
        </div>
        <ButtonAnimation onClick={handleClick} />
      </div>
      <Cards scroll={Ref} />
    </section>
  );
};

export default Home;
