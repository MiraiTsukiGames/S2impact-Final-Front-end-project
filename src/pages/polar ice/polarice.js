import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import PolarIceChart from '../../components/chart/Polaricechart'

const PolarIce = () => {
  return (
    <section>
      <Helmet>
        <title>Polar ice</title>
        <meta name="description" content="polar ice data" />
      </Helmet>
      <Title text={"Polar ice"} />
      <PolarIceChart />
    </section>
  )
}

export default PolarIce
