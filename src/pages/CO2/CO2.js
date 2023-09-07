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
      <Title text={"Carbon Dioxide Data"}/>
      <Chart />
    </section>
  )
}

export default CO2

