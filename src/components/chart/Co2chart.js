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
          backgroundColor: 'orange',
          fill: false,
          tension: 0.4
          },
          {
            label: "cycle",
            data: cycle,
            backgroundColor: 'red',
            fill: false,
            tension: 0.4
            }
      ]
      
    }
    const options = {
      plugins: {
        legend: true,
      },
      tooltips: {
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        },
        
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.value + ' units';
          }
        }
      }
    };
    
  
  return (
    <>
      <Line
      data={chartData} 
      height={500}
      width={1000}
      options={options}
      />
      <p>CO2 è un pericoloso gas</p>
    </>
  )
}

export default Chart

