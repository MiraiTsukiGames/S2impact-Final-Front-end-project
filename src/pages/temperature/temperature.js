import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import TemperatureChart from '../../components/chart/Temperaturechart'
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const Temperature = () => {
const navigate = useNavigate();

  return (
    <section>
      <Title text={"Temperature"} />
      <TemperatureChart />
      <Button text={"Home"} onClick={() => navigate("/")}/>
    </section>
  )
}

export default Temperature
