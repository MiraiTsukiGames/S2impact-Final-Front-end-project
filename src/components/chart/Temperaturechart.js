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
  const { data } = useFetchData(URL);

  let temperatureTime = data?.result?.map((item) => `${item.time}`);
  let station = data?.result?.map((item) => item.station);
  let land = data?.result?.map((item) => item.land);

  const chartData = {
    labels: temperatureTime,
    datasets: [
      {
        label: "Station",
        data: station,
        backgroundColor: "purple",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Land",
        data: land,
        backgroundColor: "aqua",
        fill: false,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
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
      <Line data={chartData} height={500} width={1000} options={options} />
    </>
  );
}

export default TemperatureChart;
