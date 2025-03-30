import React from "react";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUser,
} from "react-icons/fi";

const RouteSelect = () => {
  return (
    <>
      <div className="space-y-1">
        <Route Icon={FiHome} selected={true} title="Dashboard" />
        <Route Icon={FiUser} selected={false} title="Team" />
        <Route Icon={FiPaperclip} selected={false} title="Invoice" />
        <Route Icon={FiLink} selected={false} title="Integration" />
        <Route Icon={FiDollarSign} selected={false} title="Finance" />
      </div>
    </>
  );
};

export default RouteSelect;

const Route = ({ selected, Icon, title }) => {
  return (
    <>
      <button
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
          selected
            ? "bg-gray-500 text-gray-300 shadow-lg"
            : "hover:bg-gray-500 bg-transparent text-gray-300 shadow-none"
        } `}
      >
        <Icon />
        <span> {title} </span>
      </button>
    </>
  );
};
