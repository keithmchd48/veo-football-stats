import 'index.css';
import SelectBox from 'components/SelectBox';
import Charts from 'components/Charts';
import {metrics, charts} from 'data/constants';
import {useState} from 'react';
import React from 'react';
import {OptionsInterface, MetricOptionsInterface} from 'types';
import Multiselect from 'multiselect-react-dropdown';

const DEFAULT_METRIC = metrics[0];
const DEFAULT_CHART = charts[0];

function App() {
  const [selectedMetrics, setSelectedMetrics] = useState<MetricOptionsInterface[]>([DEFAULT_METRIC]);
  const [selectedChart, setSelectedChart] = useState<OptionsInterface>(DEFAULT_CHART);

  const onSelectMetric = (selectedList: MetricOptionsInterface[]) => {
    setSelectedMetrics(selectedList);
  };
  const onRemoveMetric = (selectedList: MetricOptionsInterface[]) => {
    setSelectedMetrics(selectedList);
  };

  const handleChartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value;
    const chart: OptionsInterface = charts.find((c) => c.value === value) || DEFAULT_CHART;
    setSelectedChart(chart);
  };

  

  return (
    <>
    <div className="my-0 mx-auto bg-brand-gray">
      <div className="w-screen h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-2xl font-bold text-center text-brand-orange p-4">Football Stats</h3>
          {/* Select Boxes */}
          <div className="flex justify-between items-center flex-wrap-reverse gap-5 p-4">
          <Multiselect
            options={metrics}
            selectedValues={selectedMetrics}
            onSelect={onSelectMetric}
            onRemove={onRemoveMetric}
            displayValue="label"
            />

            <SelectBox
              options={charts}
              value={selectedChart.value}
              onChange={handleChartChange} />
          </div>
          {/* Charts */}
          <div className="xs:h-[100%] xs:w-[100%] sm:h-[70%] sm:w-[70%] border-2 border-brand-black px-4">
            <Charts metrics={selectedMetrics} chartType={selectedChart} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
