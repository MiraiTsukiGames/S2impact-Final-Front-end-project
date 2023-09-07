import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Line } from 'react-chartjs-2';
import useFetchData from '../api/ClientAPI';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
)

const URL = "https://global-warming.org/api/co2-api";

function Chart() {
  const { data, error } = useFetchData(URL);
  
  let co2Time = data?.co2?.map((item) => `${item.year}/${item.month}/${item.day}`);
  let trend = data?.co2?.map((item) => item.trend);
  let cycle = data?.co2?.map((item) => item.cycle);

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
          cubicInterpolationMode: 'monotone',
          fill: false,
          },
          {
            label: "cycle",
            data: cycle,
            borderColor: 'rgb(192, 75, 75)',
            fill: false,
            }
      ]
      
    }
    const options = {
      plugins: {
        legend: {
          display: true,
        },
      },
    };
  
  return (
    <div>
      <Line
      data={chartData} 
      height={400}
      width={1000}
      options={options}
      />
    </div>
  )
}

export default Chart

