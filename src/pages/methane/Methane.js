import React from 'react';
import { Helmet } from 'react-helmet';
import Title from '../../components/title/Title';
import MethaneChart from '../../components/chart/Methanechart';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const Methane = () => {
const navigate = useNavigate();

  return (
    <section>
      <Title text={"Methane"}/>
      <MethaneChart />
      <Button text={"Home"} onClick={() => navigate("/")}/>
    </section>
  )
}

export default Methane
