import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import ClientAPI from '../../components/api/ClientAPI'

const NO2 = () => {
  return (
    <section>
      <Helmet>
        <title>NO2</title>
        <meta name="description" content="nitrogen dioxide data" />
      </Helmet>
      <Title text={"NO2 Data"} />
      <ClientAPI url={"https://global-warming.org/api/nitrous-oxide-api"}/>
    </section>
  )
}

export default NO2
