// ResizeHandle.tsx
import React from "react";
import { motion } from "framer-motion";

interface ResizeHandleProps {
  onResize: (width: number, height: number) => void; // Callback to update window size
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ onResize }) => {
  const handleDrag = (event: any, info: any) => {
    // Calculate the new size based on drag delta
    const delta = info.delta;
    onResize(delta.x, delta.y);
  };

  return (
    <motion.div
      className="cursor-se-resize w-4 h-4 bg-gray-300 absolute bottom-0 right-0"
      dragMomentum={false}
      drag
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      dragElastic={0}
      onDrag={handleDrag}
    />
  );
};

export default ResizeHandle;
