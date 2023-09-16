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
import useFetchData from "../../api/ClientAPI";
import style from './Co2.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

const URL = "https://global-warming.org/api/co2-api";

function Chart() {
  const { data, isLoading } = useFetchData(URL);

  let co2Time = data?.co2?.map(
    (item) => `${item.year}/${item.month}/${item.day}`,
  );
  let trend = data?.co2?.map((item) => item.trend);
  let cycle = data?.co2?.map((item) => item.cycle);

  const chartData = {
    labels: co2Time,
    datasets: [
      {
        label: "cycle",
        data: cycle,
        backgroundColor: "rgba(0, 0, 255, 1)",
        fill: false,
        tension: 0.4
      },
      {
        label: "trend",
        data: trend,
        backgroundColor: "lightgreen",
        fill: false,
        tension: 0.4
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

export default Chart;
