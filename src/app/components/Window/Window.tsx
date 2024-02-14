// Window.tsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close"; // Import Close icon for the button
import ResizeHandle from "./ResizeHandle";

interface WindowProps {
  id: number;
  x: number;
  y: number;
  type?: string;
  onDrag: (id: number, event: any, info: any) => void;
  onRemove: (id: number) => void;
  isActive: boolean;
  onClick: () => void;
  children?: React.ReactNode;
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
  children,
}) => {
  const [dimensions, setDimensions] = useState({ width: 450, height: 450 });
  const motionRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const titleBarClasses = isActive ? "bg-blue-400" : "bg-gray-300";
  const fullscreenStyle = isFullscreen
    ? { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight }
    : {};

  const handleResize = (deltaWidth: number, deltaHeight: number) => {
    setDimensions((currentDimensions) => ({
      width: Math.max(100, currentDimensions.width + deltaWidth),
      height: Math.max(100, currentDimensions.height + deltaHeight),
    }));
  };

  const handleDoubleClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  console.log("Window render", dimensions.width, dimensions.height);

  return (
    <motion.div
      className={`shadow-lg border bg-white rounded-lg overflow-hidden ${
        isActive ? "z-20" : "z-10"
      }`}
      initial={false}
      animate={{
        width: isFullscreen ? window.innerWidth : dimensions.width,
        height: isFullscreen ? window.innerHeight : dimensions.height,
        ...fullscreenStyle,
      }}
      drag
      dragConstraints={{
        top: 0,
        right: window.innerWidth - dimensions.width,
        bottom: window.innerHeight - dimensions.height,
        left: 0,
      }}
      dragElastic={0.2}
      dragMomentum={false}
      ref={motionRef}
      style={{
        position: "absolute",
        x: isFullscreen ? 0 : Math.min(x, window.innerWidth - dimensions.width),
        y: isFullscreen
          ? 0
          : Math.min(y, window.innerHeight - dimensions.height),
      }}
      onDrag={(event, info) => onDrag(id, event, info)}
      onTap={onClick}
    >
      <div
        className={`flex items-center justify-between p-2 ${titleBarClasses}`}
        onDoubleClick={handleDoubleClick}
      >
        <span className="text-sm font-medium text-white">
          {type || "Window"}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the double click on the window when closing
            onRemove(id);
          }}
          className="p-1 rounded-full text-white hover:bg-red-700 focus:outline-none"
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>

      {/* Window Content -- Adjust as needed */}
      <div
        className="p-4 text-black w-full"
        style={{
          height: isFullscreen
            ? window.innerHeight - 50
            : `${dimensions.height - 50}px`,
        }}
      >
        {children}
      </div>

      {/* Resize Handle: only shown when not in full screen mode */}
      <div className="absolute bottom-1 right-1">
        {!isFullscreen ? <ResizeHandle onResize={handleResize} /> : null}
      </div>
    </motion.div>
  );
};

export default Window;
