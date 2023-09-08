import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import No2Chart from '../../components/chart/No2chart'

const NO2 = () => {
  return (
    <section>
      <Helmet>
        <title>NO2</title>
        <meta name="description" content="nitrogen dioxide data" />
      </Helmet>
      <Title text={"NO2 Data"} />
      <No2Chart />
    </section>
  )
}

export default NO2
