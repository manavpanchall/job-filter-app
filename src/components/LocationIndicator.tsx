import React from "react";

export const LocationIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 text-base">
      <img src="/location-icon.png" className="w-6" alt="Location Icon" />
      <div>New York, NY</div>
    </div>
  );
};
