import React from "react";
import { FiCalendar, FiSmile } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-gray-500">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-extralight block text-white">
            👋 Welcome Back, <span className="font-bold">Elon</span>
          </span>
          <span className="text-xs block text-gray-400 mt-1">
            Monday, March 3rd 2025
          </span>
        </div>

        <button className="flex rounded text-sm items-center gap-2 bg-gray-100 transition-colors hover:bg-gray-600 hover:text-gray-100 px-3 py-1.5 cursor-pointer">
          <FiCalendar />
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
