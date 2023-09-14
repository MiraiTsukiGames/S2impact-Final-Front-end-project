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
import Loading from "../loading/Loading";
import Error from "../error/Error";

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
  const { data, error, loading } = useFetchData(URL);

  let temperatureTime = data?.result?.map((item) => `${item.time}`) || [];
  let station = data?.result?.map((item) => item.station) || [];
  let land = data?.result?.map((item) => item.land) || [];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }
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
