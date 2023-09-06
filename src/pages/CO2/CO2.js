import React from 'react';
import Title from '../../components/title/Title';
import { Helmet } from 'react-helmet';
import Chart from '../../components/chart/Chart';
import ClientAPI from '../../components/api/ClientAPI';

const CO2 = () => {
  
  return (
    <section>
      <Helmet>
        <title>CO2</title>
        <meta name="description" content="dioxide carbon data" />
      </Helmet>
      <Title text={"Dioxide Carbon Data"}/>
      <Chart />
      <ClientAPI />
    </section>
  )
}

export default CO2

