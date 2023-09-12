import React, { useRef } from 'react'
import Title from '../../components/title/Title'
import ButtonAnimation from '../../components/button/ButtonAnimation'
import styles from './Home.module.css';
import Cards from '../../components/cards/Cards';
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const Ref = useRef(null);
  const handleClick = () => {
    Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const { t } = useTranslation(); 
  

  return (
    <section>
    <div className={styles.banner}>
    <div className={styles.home}>
      <Title text={t("app.title")}/>
      <p className="text-left p-4 text-base md:text-lg">
      <Trans i18nKey="app.description">
        
      </Trans>
      </p>
      </div>
    <ButtonAnimation onClick={handleClick}/>
    </div>
    <Cards scroll={Ref}/>
      </section>
      
  )
}

export default Home


