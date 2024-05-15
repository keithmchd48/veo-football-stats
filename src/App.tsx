import 'index.css';
import SelectBox from 'components/SelectBox';
import Charts from 'components/Charts';
import MainLayout from 'layouts/MainLayout';
import {metrics, charts} from 'data/constants';
import {useState} from 'react';
import React from 'react';
import {OptionsInterface, MetricOptionsInterface} from 'types';
import Multiselect from 'multiselect-react-dropdown';
import {brandOrange, brandGray, brandWhite} from './../tailwind.config';


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

  const multiselectStyles = {
    chips: {
      background: brandOrange,
      color: brandWhite,
      border: '1px solid',
      borderColor: brandOrange,
      borderRadius: '5px',
      marginBottom: '0',
    },
    searchBox: {
      fontSize: '14px',
      border: '1px solid',
      borderColor: brandOrange,
      borderRadius: '5px',
    },
    optionContainer: {
      border: '1px solid',
      borderColor: brandOrange,
      borderRadius: '5px',
      backgroundColor: brandGray,
    },
    option: {
      color: brandOrange,
    },
  };
  

  return (
    <MainLayout>
    {/* Select Boxes */}
    <div className="flex justify-between items-center flex-wrap-reverse gap-5 p-4">
      <Multiselect
        options={metrics}
        selectedValues={selectedMetrics}
        onSelect={onSelectMetric}
        onRemove={onRemoveMetric}
        displayValue="label"
        placeholder=""
        closeOnSelect={false}
        style={multiselectStyles}
        />

      <SelectBox
        options={charts}
        value={selectedChart.value}
        onChange={handleChartChange} />
      </div>
      {/* Charts */}
      <div className="xs:h-[100%] xs:w-[97%] sm:h-[70%] sm:w-[70%] border-2 border-brand-black px-4 py-2 rounded-lg my-0 mx-auto">
        <Charts metrics={selectedMetrics} chartType={selectedChart} />
      </div>
    </MainLayout>
  )
}

export default App
