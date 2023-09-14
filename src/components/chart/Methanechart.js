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

const URL = "https://global-warming.org/api/methane-api";

function MethaneChart() {
  const { data, error, loading } = useFetchData(URL);
  
  let methaneTime = data?.methane?.map((item) => `${item.date}`);
  let average = data?.methane?.map((item) => item.average);
  let trend = data?.methane?.map((item) => item.trend);
 

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }
      const chartData = {
        labels: methaneTime,
        datasets: [
          {
          label: "average",
          data: average,
          backgroundColor: 'gold',
          fill: false,
          tension: 0.4
          },
          {
            label: "trend",
            data: trend,
            backgroundColor: 'silver',
            fill: false,
            tension: 0.4
            },
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
    </>
  )
}

export default MethaneChart

