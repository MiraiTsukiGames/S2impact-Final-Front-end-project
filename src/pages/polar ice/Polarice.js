import React from 'react'
import Title from '../../components/title/Title'
import PolarIceChart from '../../components/chart/Polaricechart'
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const PolarIce = () => {
const navigate = useNavigate();

  return (
    <section>
      <Title text={"Polar ice"} />
      <PolarIceChart />
      <Button text={"Home"} onClick={() => navigate("/")}/>
    </section>
  )
}

export default PolarIce
