import React from "react";
import { FilterItem } from "./FilterItem";
import { SalaryRange } from "./SalaryRange";

export const FilterBar: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between w-full max-w-[1326px] mt-5">
      <FilterItem label="Designer" isActive={true} />
      <FilterItem label="Work Location" isActive={false} />
      <FilterItem label="Experience" isActive={false} />
      <FilterItem label="Per month" isActive={true} />
      <SalaryRange />
    </div>
  );
};
