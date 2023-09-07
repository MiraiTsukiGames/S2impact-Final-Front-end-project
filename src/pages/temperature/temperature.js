import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'


const Temperature = () => {
  return (
    <section>
      <Helmet>
        <title>Temperature</title>
        <meta name="description" content="temperature data" />
      </Helmet>
      <Title text={"Temperature Data"} />
    </section>
  )
}

export default Temperature
