import {SelectBoxInterface} from 'types';

const SelectBox = ({ options, value, onChange }: SelectBoxInterface) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;