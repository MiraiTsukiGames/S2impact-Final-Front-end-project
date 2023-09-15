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

const URL = "https://global-warming.org/api/nitrous-oxide-api";

function No2Chart() {
  const { data } = useFetchData(URL);

  let no2Time = data?.nitrous?.map((item) => `${item.date}`);
  let average = data?.nitrous?.map((item) => item.average);
  let trend = data?.nitrous?.map((item) => item.trend);

  const chartData = {
    labels: no2Time,
    datasets: [
      {
        label: "Average",
        data: average,
        backgroundColor: "green",
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

export default No2Chart;
