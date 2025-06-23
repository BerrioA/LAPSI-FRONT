import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Charts = ({ data }) => {
  const labels = data.map((item) => item.mes);
  const values = data.map((item) => item.reservas);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Reservas",
        data: values,
        backgroundColor: "#B29A64", // primary
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#152E3A", // secondary
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#152E3A", // secondary
          font: {
            size: 13,
            weight: "bold",
          },
        },
        grid: {
          color: "#F5F5F5", // light-gray lines
        },
      },
      x: {
        ticks: {
          color: "#152E3A", // secondary
          font: {
            size: 13,
            weight: "bold",
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-full-white shadow-md rounded-2xl p-6 w-full">
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
};
