import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";

const CommandMenu = ({ open, setOpen }) => {
  const [value, setValue] = useState("");

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 bg-gray-950/50"
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-600 rounded-lg shadow-xl border-gray-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
        >
          <Command.Input
            value={value}
            onValueChange={setValue}
            placeholder="What do you need?"
            className="relative border-b border-gray-400 p-3 text-lg w-full placeholder:text-gray-400 focus:outline-none text-white"
          />
          <Command.List className="p-3">
            <Command.Empty className="text-gray-400">
              No results found for.
              <span className="text-violet-100 ml-1">{value}</span>
            </Command.Empty>

            <Command.Group
              heading="Team"
              className="text-sm mb-3 text-yellow-400"
            >
              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-gray-200 hover:bg-gray-200 hover:text-gray-950 rounded items-center gap-2 mt-2">
                <FiPlus />
                Invite Member
              </Command.Item>

              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-gray-200 hover:bg-gray-200 hover:text-gray-950 rounded items-center gap-2">
                <FiEye />
                See Org Chart
              </Command.Item>

            </Command.Group>


            <Command.Group
              heading="Integration"
              className="text-sm mb-3 text-yellow-400"
            >
              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-gray-200 hover:bg-gray-200 hover:text-gray-950 rounded items-center gap-2 mt-2">
                <FiLink />
                Link Service
              </Command.Item>

              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-gray-200 hover:bg-gray-200 hover:text-gray-950 rounded items-center gap-2">
                <FiPhone />
                Contact Support
              </Command.Item>

            </Command.Group>

            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-gray-200 hover:bg-gray-200 hover:text-gray-950 rounded items-center gap-2 mt-2">
                <FiLogOut />
                Sign Out
              </Command.Item>


          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
};

export default CommandMenu;
