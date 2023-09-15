import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useFetchData from "../api/ClientAPI";
import style from './Temperature.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

const URL = "https://global-warming.org/api/temperature-api";

function TemperatureChart() {
  const { data, isLoading } = useFetchData(URL);

  let temperatureTime = data?.result?.map((item) => `${item.time}`);
  let station = data?.result?.map((item) => item.station);
  let land = data?.result?.map((item) => item.land);

  const chartData = {
    labels: temperatureTime,
    datasets: [
      {
        label: "Station",
        data: station,
        backgroundColor: "red",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Land",
        data: land,
        backgroundColor: "orange",
        fill: false,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    animation: {
      duration: 0
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true
      }
  },
    tooltips: {
      titleFont: {
        size: 14,
        weight: "bold",
      },
      bodyFont: {
        size: 12,
      },

      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.value + " units";
        },
      },
    },
  };

  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      chartData &&
    <div className={style.backgroundChart}>
      <Line data={chartData} options={options} />
    </div>
    )}
    </>
  );
}

export default TemperatureChart;
