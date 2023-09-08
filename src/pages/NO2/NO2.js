import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import No2Chart from '../../components/chart/No2chart'
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const NO2 = () => {
const navigate = useNavigate();

  return (
    <section>
      <Helmet>
    <meta charSet="utf-8" />
    <title>NO2</title>
    <link rel="canonical" href="http://globalwarming.app" />
            </Helmet>
      <Title text={"NO2 Data"} />
      <No2Chart />
      <Button text={"Home"} onClick={() => navigate("/")}/>
    </section>
  )
}

export default NO2
