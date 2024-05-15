import { Line, Radar, Bar } from 'react-chartjs-2';
import {ChartConfigInterface, OptionsInterface, CHART_TYPES} from 'types';
import {stats} from 'data/constants';
import moment from 'moment';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DEFAULT_CONFIG: ChartConfigInterface = {
  responsive: true,
  maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: '',
      },
    },
};

const Charts = ({ metricType, chartType }: { metricType: OptionsInterface; chartType: OptionsInterface; }) => {
  const dataMap = new Map();
  stats.forEach((stat) => {
    const date: string = moment(stat.date, "YYYY-MM-DD").format('MMM DD YY');
    const metric: number | string = stat[metricType.value as keyof typeof stat];
    dataMap.set(date, metric);
  });

  console.log(dataMap);

  const chartData = {
    labels: Array.from(dataMap.keys()),
    datasets: [
      {
        label: `${metricType.label}`,
        data: Array.from(dataMap.values()),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1,
      }
    ],
  };

  return (
    <div className="w-full h-full">
      {/* {chartType.value === CHART_TYPES.LINE && <Line data={chartData} options={DEFAULT_CONFIG} />} */}
      {/* {chartType.value === CHART_TYPES.RADIAL && <Radar data={chartData} options={DEFAULT_CONFIG} />} */}
      {chartType.value === CHART_TYPES.BAR && <Bar data={chartData} options={DEFAULT_CONFIG} />}
    </div>
  );
};

export default Charts;