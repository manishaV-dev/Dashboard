import React, { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import CommandMenu from "./CommandMenu";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-500 mb-4 relative rounded flex items-center px-2 py-2 text-sm">
        <FiSearch className="mr-2 text-white" />
        <input
          type="text"
          placeholder="search"
          className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none"
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
        />
        <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-gray-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand />
        </span>
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default SearchBar;
