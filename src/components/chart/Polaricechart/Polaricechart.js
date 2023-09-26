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
import { useFetchData } from "../../api/ClientAPI";
import Loading from "../../loading/Loading";
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
  const { data: polarIceData, isLoading: polarIceLoading } = useFetchData("https://global-warming.org/api/arctic-api");
  let area = polarIceData?.arcticData?.map((item) => `${item.area}`);
  let extent = polarIceData?.arcticData?.map((item) => `${item.extent}`);
  let arcticTime = polarIceData?.arcticData?.map(
    (item) => `${item.year}/${item.month}`,
  );
  let rank = polarIceData?.arcticData?.map((item) => `${item.rank}`);

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
      {polarIceLoading ? (
        <div><Loading /></div>
      ) : (
        <div className={style.backgroundChart}>
          <Line data={chartData} options={options} />
        </div>
      )}
    </>
  );
}

export default PolarIceChart;
