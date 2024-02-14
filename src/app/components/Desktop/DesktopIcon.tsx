// DesktopIcon.tsx
import React from "react";
import { motion } from "framer-motion";

interface DesktopIconProps {
  Icon: React.ElementType; // Accepts a component as a prop, e.g., Material UI icons
  label: string;
  onDoubleClick: () => void; // Action to perform on double-click
  // Additional props as needed for dragging, etc.
  desktopRef: React.RefObject<HTMLDivElement>; //
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  Icon,
  label,
  onDoubleClick,
  desktopRef,
}) => {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      dragConstraints={desktopRef}
      drag
      dragMomentum={false} // Ensures no sliding effect after drag
      onDoubleClick={onDoubleClick}
    >
      <Icon className="text-cyan-950 hover:text-gray-900" fontSize="large" />
      <span className="text-sm font-bold mt-1 text-cyan-950">{label}</span>
    </motion.div>
  );
};

export default DesktopIcon;
