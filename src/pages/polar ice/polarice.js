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
        <title>Polar ice</title>
        <meta name="description" content="polar ice data" />
      </Helmet>
      <Title text={"Polar ice"} />
      <PolarIceChart />
      <Button text={"Home"} onClick={() => navigate("/")}/>
    </section>
  )
}

export default PolarIce
