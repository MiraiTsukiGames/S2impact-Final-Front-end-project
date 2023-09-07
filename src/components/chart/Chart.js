import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip } from "chart.js";
import { Line } from 'react-chartjs-2';
import useFetchData from '../api/ClientAPI';
import Loading from '../loading/loading';
import Error from '../error/error';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip
)

const URL = "https://global-warming.org/api/co2-api";

function Chart() {
  const { data, error, loading } = useFetchData(URL);
  
  let co2Time = data?.co2?.map((item) => `${item.year}/${item.month}/${item.day}`);
  let trend = data?.co2?.map((item) => item.trend);
  let cycle = data?.co2?.map((item) => item.cycle);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }
      const chartData = {
        labels: co2Time,
        datasets: [
          {
          label: "trend",
          data: trend,
          borderColor: 'rgb(75,192,192)',
          backgroundColor: 'aqua',
          pointBorderColor: 'purple',
          fill: true,
          tension: 0.4
          },
          {
            label: "cycle",
            data: cycle,
            borderColor: 'rgb(192, 75, 75)',
            backgroundColor: 'red',
            pointBorderColor: 'orange',
            fill: true,
            tension: 0.4
            }
      ]
      
    }
    const options = {
      plugins: {
        legend: true,
      },
    };
  
  return (
    <>
      <Line
      data={chartData} 
      height={400}
      width={1000}
      options={options}
      />
      <p>CO2 è un pericoloso gas</p>
    </>
  )
}

export default Chart

