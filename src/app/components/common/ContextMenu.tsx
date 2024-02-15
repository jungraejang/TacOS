import React from "react";
import { MenuItem } from "@/app/types/desktop.type";

interface ContextMenuProps {
  visible: boolean;
  x: number;
  y: number;
  menuItems: MenuItem[]; // Accept an array of menu items
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  visible,
  x,
  y,
  menuItems, // Use the menuItems prop
}) => {
  if (!visible) return null;

  return (
    <div
      className="absolute bg-white shadow-md rounded-md z-50"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <ul className="py-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 text-black hover:bg-gray-300 cursor-pointer"
            onClick={item.action}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
