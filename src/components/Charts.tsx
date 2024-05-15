import { Line, Radar, Bar } from 'react-chartjs-2';
import {ChartConfigInterface, OptionsInterface, MetricOptionsInterface, CHART_TYPES} from 'types';
import {stats} from 'data/constants';
import moment from 'moment';

import {
  Chart as ChartJS,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
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

interface ChartSetInterface {
  label: string;
  data: number[];
  borderColor: string;
  borderWidth: number;
  tension: number;
  backgroundColor?: string;
}

const Charts = ({ metrics, chartType }: { metrics: MetricOptionsInterface[]; chartType: OptionsInterface; }) => {
  const attacksData: number[] = stats.map((stat) => stat.attacks);
  const defenseData: number[] = stats.map((stat) => stat.defense);
  const concededData: number[] = stats.map((stat) => stat.conceded);
  const scoredData: number[] = stats.map((stat) => stat.scored);
  const cornersData: number[] = stats.map((stat) => stat.corners);
  const freeKicksData: number[] = stats.map((stat) => stat.freeKicks);
  const possessionData: number[] = stats.map((stat) => stat.possession);
  const dates: string[] = stats.map((stat) => moment(stat.date).format('MMM DD YY'));

  const dataSets: ChartSetInterface[] = metrics.map((metric) => {
    let data: number[] = [];
    
    switch (metric.id) {
      case 'attacks':
        data = attacksData;
        break;
      case 'defense':
        data = defenseData;
        break;
      case 'conceded':
        data = concededData;
        break;
      case 'scored':
        data = scoredData;
        break;
      case 'corners':
        data = cornersData;
        break;
      case 'freeKicks':
        data = freeKicksData;
        break;
      case 'possession':
        data = possessionData;
        break;
      default:
        data = [];
    }

    const returnObject: ChartSetInterface = {
      label: metric.label,
      data,
      borderColor: metric.color,
      borderWidth: 2,
      tension: 0.1,
    };

    if (chartType.value === CHART_TYPES.RADIAL) {
      return returnObject;
    } else {
      return {
        ...returnObject,
        backgroundColor: metric.color,
      };
    }
  });

  const chartData: {labels: string[]; datasets: ChartSetInterface[]} = {
    labels: dates,
    datasets: dataSets,
  };

  return (
    <div className="w-full h-full">
      {chartType.value === CHART_TYPES.LINE && <Line data={chartData} options={DEFAULT_CONFIG} />}
      {chartType.value === CHART_TYPES.RADIAL && <Radar data={chartData} options={DEFAULT_CONFIG} />}
      {chartType.value === CHART_TYPES.BAR && <Bar data={chartData} options={DEFAULT_CONFIG} />}
    </div>
  );
};

export default Charts;