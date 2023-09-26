import React from "react";
import Loading from "../../loading/Loading";
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
import style from "./Temperature.module.css";
import { useTemperatureFetchData } from "../../api/ClientAPI";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

function TemperatureChart() {
  const { temperatureData, isTemperatureLoading } = useTemperatureFetchData();
  let temperatureTime = temperatureData?.result?.map((item) => `${item.time}`);
  let station = temperatureData?.result?.map((item) => `${item.station}`);
  let land = temperatureData?.result?.map((item) => `${item.land}`);

  const chartData = {
    labels: temperatureTime,
    datasets: [
      {
        label: "Station",
        data: station,
        backgroundColor: "orange",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Land",
        data: land,
        backgroundColor: "red",
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
      {isTemperatureLoading ? (
        <div><Loading /></div>
      ) : (
        <div className={style.backgroundChart}>
          <Line data={chartData} options={options} />
        </div>
      )}
    </>
  );
}

export default TemperatureChart;
