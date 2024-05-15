import 'index.css';
import SelectBox from 'components/SelectBox';
import Charts from 'components/Charts';
import {metrics, charts} from 'data/constants';
import {useState} from 'react';
import React from 'react';
import {OptionsInterface} from 'types';

const DEFAULT_METRIC = metrics[0];
const DEFAULT_CHART = charts[0];

function App() {
  const [selectedMetric, setSelectedMetric] = useState<OptionsInterface>(DEFAULT_METRIC);
  const [selectedChart, setSelectedChart] = useState<OptionsInterface>(DEFAULT_CHART);

  const handleMetricChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value;
    const metric: OptionsInterface = metrics.find((m) => m.value === value) || DEFAULT_METRIC;

    setSelectedMetric(metric);
  };

  const handleChartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value;
    const chart: OptionsInterface = charts.find((c) => c.value === value) || DEFAULT_CHART;
    setSelectedChart(chart);
  };

  

  return (
    <>
    <div className="my-0 mx-auto bg-brand-gray">
      <div className="w-full h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-2xl font-bold text-center text-brand-orange p-4">Football Stats</h3>
          {/* Select Boxes */}
          <div className="flex justify-between items-center gap-5 p-4">
            <SelectBox
              options={metrics}
              value={selectedMetric.value}
              onChange={handleMetricChange} />

            <SelectBox
              options={charts}
              value={selectedChart.value}
              onChange={handleChartChange} />
          </div>
          {/* Charts */}
          <div className="xs:h-[100%] xs:w-[100%] sm:h-[70%] sm:w-[70%] border-2 border-brand-black px-4">
            <Charts metricType={selectedMetric} chartType={selectedChart} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
