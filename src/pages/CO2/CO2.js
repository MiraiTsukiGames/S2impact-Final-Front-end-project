import React from 'react';
import Title from '../../components/title/Title';
import { Helmet } from 'react-helmet';
import Co2chart from '../../components/chart/Co2chart';


const CO2 = () => {
  
  return (
    <section>
      <Helmet>
        <title>CO2</title>
        <meta name="description" content="carbon dioxide data" />
      </Helmet>
      <Title text={"Co2"}/>
      <Co2chart />
    </section>
  )
}

export default CO2

