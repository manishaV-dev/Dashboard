import React from "react";
import AccountToggle from "./AccountToggle";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        {/* Main sidebar content */}
        <AccountToggle />
      </div>

      {/* toggle */}
    </div>
  );
};

export default Sidebar;
