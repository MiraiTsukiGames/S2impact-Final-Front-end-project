import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import ClientAPI from '../../components/api/ClientAPI'

const Temperature = () => {
  return (
    <section>
      <Helmet>
        <title>Temperature</title>
        <meta name="description" content="temperature data" />
      </Helmet>
      <Title text={"Temperature Data"} />
      <ClientAPI url={"https://global-warming.org/api/temperature-api"}/>
    </section>
  )
}

export default Temperature
