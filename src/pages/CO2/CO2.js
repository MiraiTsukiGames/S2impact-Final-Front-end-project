import React from 'react';
import Title from '../../components/title/Title';
import { Helmet } from 'react-helmet';
import Chart from '../../components/chart/Chart';


const CO2 = () => {
  
  return (
    <section>
      <Helmet>
        <title>CO2</title>
        <meta name="description" content="carbon dioxide data" />
      </Helmet>
      <Title text={"Co2"}/>
      <Chart />
      <p></p>
    </section>
  )
}

export default CO2

