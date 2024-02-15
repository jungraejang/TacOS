import { MenuItem } from "@/app/types/desktop_type";
import React from "react";

interface DesktopContextMenuProps {
  visible: boolean;
  x: number;
  y: number;
  onResetIcons: () => void;
  onAddSquare: (type: string) => void;
}

const DesktopContextMenu: React.FC<DesktopContextMenuProps> = ({
  visible,
  x,
  y,
  onResetIcons,
  onAddSquare,
}) => {
  if (!visible) return null;

  const menuItems: MenuItem[] = [
    {
      label: "Display Setting",
      action: () => console.log("Display Setting clicked"),
    },
    { label: "Reset Icons", action: onResetIcons },
    {
      label: "Other Settings",
      action: () => console.log("Other Settings clicked"),
    },
    { label: "About", action: () => onAddSquare("About") },
  ];

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

export default DesktopContextMenu;
