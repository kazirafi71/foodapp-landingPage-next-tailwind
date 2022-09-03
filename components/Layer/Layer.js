import React from "react";
import NavbarComp from "../NavbarComp/NavbarComp";

const Layer = ({ children }) => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <NavbarComp />

      {/* Body Components */}
      {children}

      {/* Footer  */}
    </div>
  );
};

export default Layer;
