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
import style from "./Methane.module.css";
import Loading from "../../loading/Loading";
import { useFetchData } from "../../api/ClientAPI";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

function MethaneChart() {
  const { methaneData, methaneLoading } = useFetchData("https://global-warming.org/api/methane-api");
  let trend = methaneData?.methane?.map((item) => item.trend);
  let average = methaneData?.methane?.map((item) => item.average);
  let methaneTime = methaneData?.methane?.map((item) => `${item.date}`);

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
      {methaneLoading ? (
        <div><Loading /></div>
      ) : (
        <div className={style.backgroundChart}>
          <Line data={chartData} options={options} />
        </div>
      )}
    </>
  );
}

export default MethaneChart;
