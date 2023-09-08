import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip } from "chart.js";
import { Line } from 'react-chartjs-2';
import useFetchData from '../api/ClientAPI';
import Loading from '../loading/Loading';
import Error from '../error/Error';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip
)

const URL = "https://global-warming.org/api/nitrous-oxide-api";

function No2Chart() {
  const { data, error, loading } = useFetchData(URL);
  
  let no2Time = data?.nitrous?.map((item) => `${item.date}`);
  let average = data?.nitrous?.map((item) => item.average);
  let trend = data?.nitrous?.map((item) => item.trend);
 

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }
      const chartData = {
        labels: no2Time,
        datasets: [
          {
          label: "average",
          data: average,
          backgroundColor: 'green',
          fill: true,
          tension: 0.4
          },
          {
            label: "trend",
            data: trend,
            backgroundColor: 'yellow',
            fill: true,
            tension: 0.4
            },
      ]
      
    }
    const options = {
      plugins: {
        legend: true,
      }
  };
    
  
  return (
    <>
      <Line
      data={chartData} 
      height={600}
      width={1500}
      options={options}
      />
      <p>CO2 è un pericoloso gas</p>
    </>
  )
}

export default No2Chart

