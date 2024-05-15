import {SelectBoxInterface} from 'types';

const SelectBox = ({ options, value, onChange }: SelectBoxInterface) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="px-4 py-2 bg-brand-gray text-brand-orange border border-brand-orange rounded-[5px] shadow-sm focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange cursor-pointer"
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