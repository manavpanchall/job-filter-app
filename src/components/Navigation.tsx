import React from "react";
import { LocationIndicator } from "./LocationIndicator";
import { NavigationMenu } from "./NavigationMenu";
import { UserControls } from "./UserControls";
import { FilterBar } from "./FilterBar";

const Navigation: React.FC = () => {
  return (
    <div className="flex flex-col py-7 w-full bg-gray-900">
      <div className="px-20 w-full">
        <div className="flex gap-5 justify-between items-center w-full">
          <img
            loading="lazy"
            src="/logo.png"
            className="w-36"
            alt="Company Logo"
          />
          <NavigationMenu />
          <LocationIndicator />
          <UserControls />
        </div>
      </div>
      <div className="w-full border-2 border-gray-700" />
      <FilterBar />
    </div>
  );
};

export default Navigation;
