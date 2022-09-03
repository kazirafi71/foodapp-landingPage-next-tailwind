import React from "react";

const SidebarRow = ({ Icon, title }) => {
  return (
    <div>
      <li className="text-xl flex py-4  items-center">
        <Icon size={25} className="mr-4" /> {title}
      </li>
    </div>
  );
};

export default SidebarRow;
