import React from 'react';
import { Helmet } from 'react-helmet';
import Title from '../../components/title/Title';
import ClientAPI from '../../components/api/ClientAPI';

const Methane = () => {
  return (
    <section>
      <Helmet>
        <title>Methane</title>
        <meta name="description" content="methane data" />
      </Helmet>
      <Title text={"Methane Data"}/>
      <ClientAPI url={"https://global-warming.org/api/methane-api"}/>
    </section>
  )
}

export default Methane
