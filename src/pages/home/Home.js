import React, { useRef } from 'react'
import Title from '../../components/title/Title'
import ButtonAnimation from '../../components/button/ButtonAnimation'
import styles from './Home.module.css';
import Cards from '../../components/cards/Cards';
import { useLanguageContext } from '../../context/language/Language';

const Home = () => {
  const Ref = useRef(null);
  const handleClick = () => {
    Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const { translate } = useLanguageContext();

  return (
    <section>
    <div className={styles.banner}>
    <div className={styles.home}>
      <Title text={translate("home.title")}/>
      <p className="text-left p-4 text-base md:text-lg">
      {translate("home.description")}
      </p>
      </div>
    <ButtonAnimation onClick={handleClick}/>
    </div>
    <Cards scroll={Ref}/>
      </section>
      
  )
}

export default Home


