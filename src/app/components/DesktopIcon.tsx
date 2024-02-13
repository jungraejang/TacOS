// DesktopIcon.tsx
import React from "react";
import { motion } from "framer-motion";

interface DesktopIconProps {
  Icon: React.ElementType; // Accepts a component as a prop, e.g., Material UI icons
  label: string;
  onDoubleClick: () => void; // Action to perform on double-click
  // Additional props as needed for dragging, etc.
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  Icon,
  label,
  onDoubleClick,
}) => {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer w-32"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      drag
      dragMomentum={false} // Ensures no sliding effect after drag
      onDoubleClick={onDoubleClick}
    >
      <Icon className="text-5xl text-gray-700 hover:text-gray-900" />
      <span className="text-sm mt-1">{label}</span>
    </motion.div>
  );
};

export default DesktopIcon;
