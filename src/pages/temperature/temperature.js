import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import TemperatureChart from '../../components/chart/Temperaturechart'

const Temperature = () => {
  return (
    <section>
      <Helmet>
        <title>Temperature</title>
        <meta name="description" content="temperature data" />
      </Helmet>
      <Title text={"Temperature"} />
      <TemperatureChart />
    </section>
  )
}

export default Temperature
