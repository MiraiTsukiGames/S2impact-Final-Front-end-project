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
import style from "./Temperature.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

function TemperatureChart() {
  const { data, isLoading } = useFetchData("https://global-warming.org/api/temperature-api");

  // Extracting necessary data from the fetched data
  let temperatureTime = data?.result?.map((item) => `${item.time}`);
  let station = data?.result?.map((item) => `${item.station}`);
  let land = data?.result?.map((item) => `${item.land}`);

  if (isLoading) {
    return <Loading />; // Renders a loading component if data is still being fetched
  }

  // Chart styling
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

  // Chart options
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
    {/*Render chart */}
        <div className={style.backgroundChart}>
          <Line data={chartData} options={options} />
        </div>
    </>
  );
}

export default TemperatureChart;
