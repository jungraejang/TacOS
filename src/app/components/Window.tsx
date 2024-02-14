// Window.tsx
import React, { useRef, useState } from "react";
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
  const [dimensions, setDimensions] = useState({ width: 450, height: 450 });
  const motionRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  console.log(
    "x and y",
    x,
    y,
    dimensions.width,
    dimensions.height,
    isFullscreen
  );

  const titleBarClasses = isActive ? "bg-blue-400" : "bg-gray-300";
  const windowClasses = isActive ? "z-20" : "z-10";
  const fullscreenStyle = isFullscreen
    ? { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight }
    : {};

  const handleResizeDrag = (event: any, info: any) => {
    const delta = info.delta;
    setDimensions((current) => ({
      width: Math.max(100, current.width + delta.x),
      height: Math.max(100, current.height + delta.y),
    }));
  };

  const handleDoubleClick = () => {
    setIsFullscreen(!isFullscreen);
  };

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
      dragElastic={0}
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
        onDoubleClick={handleDoubleClick} // Attach the double click event here
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
      <div className="p-4">
        <p>This is a window content.</p>
      </div>

      {/* Resize Handle */}
      <div className="absolute bottom-4 right-4">
        <motion.div
          className="cursor-se-resize w-4 h-4 bg-gray-300"
          dragMomentum={false}
          drag
          dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          dragElastic={0}
          style={{
            position: "absolute",
          }}
          onDrag={(event, info) => handleResizeDrag(event, info)}
        />
      </div>
    </motion.div>
  );
};

export default Window;
