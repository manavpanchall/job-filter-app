import React from "react";

export const SalaryRange: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="text-lg">Salary Range</div>
      <div className="flex w-full bg-gray-200 rounded-full min-h-1 mt-2">
        <div className="bg-blue-500 w-[83px] min-h-1 rounded-full"></div>
      </div>
      <div className="flex justify-between mt-2 text-base">
        <div>$600</div>
        <div>$1,200</div>
      </div>
    </div>
  );
};
