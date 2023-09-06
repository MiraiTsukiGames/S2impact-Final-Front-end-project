import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'

const NO2 = () => {
  return (
    <section>
      <Helmet>
        <title>NO2</title>
        <meta name="description" content="nitrogen dioxide data" />
      </Helmet>
      <Title text={"NO2 Data"} />
    </section>
  )
}

export default NO2
