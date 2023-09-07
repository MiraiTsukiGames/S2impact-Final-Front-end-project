import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import ClientAPI from '../../components/api/ClientAPI'

const Polarice = () => {
  return (
    <section>
      <Helmet>
        <title>Polar ice</title>
        <meta name="description" content="polar ice data" />
      </Helmet>
      <Title text={"Polar ice Data"} />
      <ClientAPI url={" https://global-warming.org/api/arctic-api"}/>
    </section>
  )
}

export default Polarice
