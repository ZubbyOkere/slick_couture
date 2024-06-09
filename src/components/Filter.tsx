import { FilterProps, options, sortOptions } from "@/constants/constants";
import React from "react";

const Select = ({ label, values }: FilterProps) => (
  <select
    name={label.toLowerCase()}
    className="py-2 px-4 rounded-2xl text-xs font-medium bg-white outline-none"
  >
    <option>{label}</option>
    {values.map((value, index) => (
      <option key={index} value={value}>
        {value}
      </option>
    ))}
  </select>
);

const Filter = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mt-12">
      <div className="flex gap-6 flex-wrap">
        {options.map((option, index) => (
          <Select key={index} label={option.label} values={option.values} />
        ))}
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-none"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-none"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        {sortOptions.map((option, index) => (
          <Select key={index} label={option.label} values={option.values} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
