// Window.tsx
import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close"; // Import Close icon for the button

interface WindowProps {
  id: number;
  x: number;
  y: number;
  type?: string;
  onDrag: (id: number, event: any, info: any) => void;
  onRemove: (id: number) => void;
  isActive: boolean;
  onClick: () => void;
}

const Window: React.FC<WindowProps> = ({
  id,
  x,
  y,
  onDrag,
  onRemove,
  type,
  isActive,
  onClick,
}) => {
  // Conditional styling for active/inactive windows

  const titleBarClasses = isActive ? "bg-blue-400" : "bg-gray-300";

  return (
    <motion.div
      className={`shadow-lg border bg-white rounded-lg overflow-hidden`}
      initial={false}
      drag
      dragConstraints={{
        top: 0,
        right: window.innerWidth - 300,
        bottom: window.innerHeight - 300,
        left: 0,
      }}
      dragMomentum={false}
      dragElastic={1}
      style={{
        x,
        y,
        width: 300,
        height: 300,
        position: "absolute",
      }}
      onDrag={(event, info) => onDrag(id, event, info)}
      onTap={onClick}
    >
      {/* Title Bar */}
      <div
        className={`flex items-center justify-between p-2 ${titleBarClasses}`}
      >
        <span className="text-sm font-medium text-white">
          {type || "Window"}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
          className="p-1 rounded-full text-white hover:bg-red-700 focus:outline-none"
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>

      {/* Window Content -- Adjust as needed */}
      <div className="p-4">
        <p>This is a window content.</p>
      </div>
    </motion.div>
  );
};

export default Window;
