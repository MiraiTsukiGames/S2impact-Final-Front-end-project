import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import PolarIceChart from '../../components/chart/Polaricechart'
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const PolarIce = () => {
const navigate = useNavigate();

  return (
    <section>
      <Helmet>
    <meta charSet="utf-8" />
    <title>Polar ice</title>
    <link rel="canonical" href="http://globalwarming.app" />
            </Helmet>
      <Title text={"Polar ice"} />
      <PolarIceChart />
      <Button text={"Home"} onClick={() => navigate("/")}/>
    </section>
  )
}

export default PolarIce
