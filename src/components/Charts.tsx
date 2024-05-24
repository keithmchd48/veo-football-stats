import { Line, Radar, Bar } from 'react-chartjs-2';
import {ChartConfigInterface, OptionsInterface, MetricOptionsInterface, ChartSetInterface, CHART_TYPES} from 'types';
import {
  attacksData,
  defenseData,
  concededData,
  scoredData,
  cornersData,
  freeKicksData,
  dates,
  possessionData,
} from 'data/constants';


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

const Charts = ({ metrics, chartType }: { metrics: MetricOptionsInterface[]; chartType: OptionsInterface; }) => {
  const dataSets: ChartSetInterface[] = metrics.map((metric) => {
    let data: number[] = [];
    
    const metricDataLookup: Record<string, number[]> = {
      attacks: attacksData,
      defense: defenseData,
      conceded: concededData,
      scored: scoredData,
      corners: cornersData,
      freeKicks: freeKicksData,
      possession: possessionData,
    };

    data = metricDataLookup[metric.id]

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