import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-gray-500">
      <button className="flex p-0.5 hover:bg-gray-800 rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-bold text-white">Elon Musk</span>
          <span className="text-xs block text-gray-400">elon@musk.com</span>
        </div>

        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs text-white" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs text-white" />



      </button>
    </div>
  );
};

export default AccountToggle;
