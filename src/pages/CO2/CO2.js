import React from 'react';
import Title from '../../components/title/Title';
import { Helmet } from 'react-helmet';
import Co2chart from '../../components/chart/Co2chart';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const CO2 = () => {
const navigate = useNavigate();

  return (
    <section>
      <Title text={"Co2"}/>
      <Co2chart />
      <Button text={"Home"} onClick={() => navigate("/")}/>
    </section>
  )
}

export default CO2

