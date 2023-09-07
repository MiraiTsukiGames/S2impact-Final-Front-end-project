import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'


const Polarice = () => {
  return (
    <section>
      <Helmet>
        <title>Polar ice</title>
        <meta name="description" content="polar ice data" />
      </Helmet>
      <Title text={"Polar ice Data"} />
    </section>
  )
}

export default Polarice
