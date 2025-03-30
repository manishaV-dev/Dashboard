import React from "react";
import AccountToggle from "./AccountToggle";
import SearchBar from "./SearchBar";
import RouteSelect from "./RouteSelect";
import Plain from "./Plain";

const Sidebar = () => {
  return (
    <div>
      <div className="sticky top-4 h-[calc(100vh-32px-48px)]">
        {/* Main sidebar content */}
        <AccountToggle />
        <SearchBar />
        <RouteSelect />
      </div>

      {/* toggle */}
      <Plain />
    </div>
  );
};

export default Sidebar;
