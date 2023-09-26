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
import { useNo2FetchData } from "../../api/ClientAPI";
import Loading from "../../loading/Loading";
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
  const { no2Data, no2Loading } = useNo2FetchData();
  let trend = no2Data?.nitrous?.map((item) => item.trend);
  let average = no2Data?.nitrous?.map((item) => item.average);
  let no2Time = no2Data?.nitrous?.map((item) => `${item.date}`);

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
      {no2Loading ? (
        <div><Loading /></div>
      ) : (
        <div className={style.backgroundChart}>
          <Line data={chartData} options={options} />
        </div>
      )}
    </>
  );
}

export default No2Chart;
