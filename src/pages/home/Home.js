import React, { useRef } from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import ButtonAnimation from '../../components/button/ButtonAnimation'
import styles from './Home.module.css';
import Cards from '../../components/cards/Cards';


const Home = () => {
  const Ref = useRef(null);
  const handleClick = () => {
    Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section>
    <div className={styles.banner}>
    <div className={`${styles.home} home container mx-auto px-4 py-8 overflow-hidden`}>
      <Title text={"Welcome to Climate Change Alert "}/>
      <p className="text-left p-4 text-base md:text-lg">
      Global warming is a phenomenon in which the average temperature of the Earth gradually increases due to the excessive presence of greenhouse gases in the atmosphere. <br />
      These gases, such as carbon dioxide (CO2) and methane (CH4), trap heat from the sun, leading to a rise in global temperatures.<br />
      The consequences of global warming are manifold and include the rise in sea levels, the increase in global temperatures, <br />
      the acidification of oceans, the alteration of climate patterns, the increase in frequency and intensity of extreme weather events, and the acceleration of biodiversity loss.
      <br />Here you will find a vast collection of data and information regarding global warming.<br />
        Explore the graphs, statistics, and latest scientific studies to understand the magnitude and impact of this phenomenon on our planet. <br />
        We are committed to raising awareness about global warming and highlighting the urgency of taking concrete actions to address this challenge.
      </p>
      </div>
    <ButtonAnimation onClick={handleClick}/>
    </div>
    <Cards scroll={Ref}/>
      </section>
      
  )
}

export default Home


