import React from "react";

export const UserControls: React.FC = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
      <img src="/control1.png" className="w-8" alt="Control Icon 1" />
      <img src="/control2.png" className="w-8" alt="Control Icon 2" />
    </div>
  );
};
