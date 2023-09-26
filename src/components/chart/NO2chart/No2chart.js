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
import { useFetchData } from "../../api/ClientAPI.js";
import Loading from "../../loading/Loading.js";
import style from "./No2.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

function No2Chart() {
  const { data, isLoading } = useFetchData("https://global-warming.org/api/nitrous-oxide-api");
  let trend = data?.nitrous?.map((item) => item.trend);
  let average = data?.nitrous?.map((item) => item.average);
  let no2Time = data?.nitrous?.map((item) => `${item.date}`);

  if (isLoading) {
    return <Loading />;
  }

  const chartData = {
    labels: no2Time,
    datasets: [
      {
        label: "Average",
        data: average,
        backgroundColor: "orange",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Trend",
        data: trend,
        backgroundColor: "yellow",
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
      duration: 0,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
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
        <div className={style.backgroundChart}>
          <Line data={chartData} options={options} />
        </div>
    </>
  );
}

export default No2Chart;
