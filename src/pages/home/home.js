import React from 'react'
import { Helmet } from 'react-helmet'
import Title from '../../components/title/Title'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

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
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">CO2 graph</h2>
        <p className="text-base">
          Dati sul diossido di carbonio(CO2) presente nell'aria dagli anni passati all'anno presente.
        </p>
      </div>
      <div className="px-6 py-4">
        <Button text={"Load graph"} onClick={() => navigate("co2")}/>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Methane graph</h2>
        <p className="text-base">
        Dati sul metano presente nell'aria dagli anni passati all'anno presente.
        </p>
      </div>
      <div className="px-6 py-4">
        <Button text={"Load graph"} onClick={() => navigate("methane")}/>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">NO2 graph</h2>
        <p className="text-base">
        Dati sull'azoto(NO2) presente nell'aria dagli anni passati all'anno presente.
        </p>
      </div>
      <div className="px-6 py-4">
        <Button text={"Load graph"} onClick={() => navigate("no2")}/>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Polar Ice graph</h2>
        <p className="text-base">
        Dati sullo scioglimento dei ghiacciai dagli anni passati all'anno presente.
        </p>
      </div>
      <div className="px-6 py-4">
        <Button text={"Load graph"} onClick={() => navigate("polarice")}/>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Temperature graph</h2>
        <p className="text-base">
          Dati sulle temperature terrestri dagli anni passati all'anno presente.
        </p>
      </div>
      <div className="px-6 py-4">
        <Button text={"Load graph"} onClick={() => navigate("temperature")}/>
      </div>
    </div>
    </section>
    
  )
}

export default Home


