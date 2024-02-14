import { useState, useRef } from "react";

export const useWindowManager = (initialDimensions: any, { id, onDrag }) => {
  const [dimensions, setDimensions] = useState(initialDimensions);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const motionRef = useRef(null);

  const handleResizeDrag = (event: any, info: any) => {
    const delta = info.delta;
    setDimensions((current: any) => ({
      width: Math.max(100, current.width + delta.x),
      height: Math.max(100, current.height + delta.y),
    }));
  };

  const handleDoubleClick = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    } else {
      setDimensions(initialDimensions);
    }
  };

  const handleDrag = (event: any, info: any) => {
    onDrag(id, event, info); // Call the onDrag prop with updated position
  };

  return {
    dimensions,
    isFullscreen,
    handleResizeDrag,
    handleDoubleClick,
    handleDrag,
    motionRef,
  };
};
