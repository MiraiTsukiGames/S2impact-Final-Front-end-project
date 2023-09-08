import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Global warming</title>
        <meta name="description" content="warming global app" />
      </Helmet>
      <Title text={"Global warming"}/>
      <p className="text-left p-4 text-lg">Welcome to the Global Warming Data Recording App. <br></br>
      Explore graphs and statistics to understand the impact of Global Warming over time. <br></br>
      Contribute to the collection of valuable information for scientific research and informed decision-making.<br></br>
      Join our community of conscious citizens and help preserve our planet for future generations. </p>
    </section>
  )
}

export default Home


