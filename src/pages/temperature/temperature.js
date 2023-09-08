import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Title from '../../components/title/Title'
import TemperatureChart from '../../components/chart/Temperaturechart'
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const Temperature = () => {
const navigate = useNavigate();

  return (
    <HelmetProvider>
    <section>
    
      <Helmet>
        <title>Temperature</title>
        <meta name="description" content="temperature data" />
      </Helmet>
      
      <Title text={"Temperature"} />
      <TemperatureChart />
      <Button text={"Home"} onClick={() => navigate("/")}/>
    </section>
    </HelmetProvider>
  )
}

export default Temperature
