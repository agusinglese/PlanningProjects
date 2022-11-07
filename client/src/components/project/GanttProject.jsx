import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  scales: { x: { position: "top" }, y: { beginAtZero: true } },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Task1", "Task2", "Task3", "Task4", "Task5"];

export const data = {
  labels,
  datasets: [
    {
      label: "Project Time",
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: "rgba(130, 255, 99, 0.5)",
    },

    {
      label: "Real Time",
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function GanttProject() {
  return <Bar options={options} data={data} />;
}
export default GanttProject;
