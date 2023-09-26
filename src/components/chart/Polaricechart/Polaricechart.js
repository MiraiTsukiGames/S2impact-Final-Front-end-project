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
import style from "./Polarice.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

function PolarIceChart() {
  const { data, isLoading } = useFetchData(
    "https://global-warming.org/api/arctic-api",
  );

  // Extracting necessary data from the fetched data
  let area = data?.arcticData?.map((item) => `${item.area}`);
  let extent = data?.arcticData?.map((item) => `${item.extent}`);
  let arcticTime = data?.arcticData?.map(
    (item) => `${item.year}/${item.month}`,
  );
  let rank = data?.arcticData?.map((item) => `${item.rank}`);

  if (isLoading) {
    return <Loading />; // Renders a loading component if data is still being fetched
  }

  // Chart styling
  const chartData = {
    labels: arcticTime,
    datasets: [
      {
        label: "Extent",
        data: extent,
        backgroundColor: "blue",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Area",
        data: area,
        backgroundColor: "gray",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Rank",
        data: rank,
        backgroundColor: "cyan",
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

export default PolarIceChart;
