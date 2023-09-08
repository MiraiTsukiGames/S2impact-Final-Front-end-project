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

const URL = "https://global-warming.org/api/arctic-api";

function PolarIceChart() {
  const { data, error, loading } = useFetchData(URL);
  
  let arcticData = data?.arcticData?.map((item) => `${item.year}`);
  let extent = data?.arcticData?.map((item) => item.extent);
  let area = data?.arcticData?.map((item) => item.area);
 

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }
      const chartData = {
        labels: arcticData,
        datasets: [
          {
          label: "extent",
          data: extent,
          backgroundColor: 'blue',
          fill: false,
          tension: 0.4
          },
          {
            label: "area",
            data: area,
            backgroundColor: 'cyan',
            fill: false,
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
      height={500}
      width={1000}
      options={options}
      />
      <p>CO2 è un pericoloso gas</p>
    </>
  )
}

export default PolarIceChart

