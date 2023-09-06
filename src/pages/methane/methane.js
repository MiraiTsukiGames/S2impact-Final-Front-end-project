import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'

const Methane = () => {
  return (
    <section>
      <Helmet>
        <title>Methane</title>
        <meta name="description" content="methane data" />
      </Helmet>
      <Title text={"Methane Data"}/>
    </section>
  )
}

export default Methane
