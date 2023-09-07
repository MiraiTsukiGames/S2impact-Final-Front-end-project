import React from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js"
import { Line } from 'react-chartjs-2'
import useFetchData from '../api/ClientAPI'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
)


function Chart() {
  const url = "https://global-warming.org/api/co2-api"
  const { data, error } = useFetchData(url);
  

  const co2Time = data?.co2?.map(item => item.year);
  const trend = data?.co2?.map(item => item.trend);
  const cycle = data?.co2?.map(item => item.cycle);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

 

    const chartData = {
        labels: co2Time,
        datasets: [
          {
          label: "trend",
          data: trend,
          borderColor: 'rgb(75,192,192)',
          fill: false,
          tension: 0.1
          },
          {
            label: "cycle",
            data: cycle,
            borderColor: 'rgb(192, 75, 75)',
            fill: false,
            tension: 0.1
            }
      ]
      
    }
    
    
  return (
    <div>
      <Line
      data={chartData} 
      height={400}
      width={1000}
      />
    </div>
  )
}

export default Chart

