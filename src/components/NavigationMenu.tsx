import React from "react";

export const NavigationMenu: React.FC = () => {
  const menuItems = ["Find Job", "Messages", "Hiring", "Community", "FAQ"];

  return (
    <div className="flex gap-8 text-lg">
      {menuItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};
