import React from "react";

interface FilterItemProps {
  label: string;
  isActive?: boolean;
}

export const FilterItem: React.FC<FilterItemProps> = ({ label, isActive = false }) => {
  return (
    <div className="text-lg">
      <div className={isActive ? "text-white" : "text-gray-400"}>{label}</div>
    </div>
  );
};
