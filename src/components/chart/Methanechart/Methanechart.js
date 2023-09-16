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
import style from './Methane.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

const URL = "https://global-warming.org/api/methane-api";

function MethaneChart() {
  const { data, isLoading } = useFetchData(URL);

  let methaneTime = data?.methane?.map((item) => `${item.date}`);
  let average = data?.methane?.map((item) => item.average);
  let trend = data?.methane?.map((item) => item.trend);

  const chartData = {
    labels: methaneTime,
    datasets: [
      {
        label: "average",
        data: average,
        backgroundColor: "green",
        fill: false,
        tension: 0.4,
      },
      {
        label: "trend",
        data: trend,
        backgroundColor: "darkblue",
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
};

export default MethaneChart;
