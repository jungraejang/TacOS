import { useState, useRef, useCallback } from "react";
import { WindowPosition, desktopApps } from "@/app/types/desktop.type";

export const useSquares = () => {
  const [positions, setPositions] = useState<Array<WindowPosition>>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const idCounter = useRef(0);

  const BASE_X = window.innerWidth / 2 - 250;
  const BASE_Y = window.innerHeight / 2 - 250;
  const OFFSET_X = 110; // Square width + gap
  const OFFSET_Y = 110; // Square height + gap
  const addSquare = useCallback(
    (type: string) => {
      const newId = idCounter.current++;
      const rowCount = Math.floor(window.innerWidth / OFFSET_X);
      const currentCount = positions.length;
      const newX = BASE_X + (currentCount % rowCount) * OFFSET_X;
      const newY = BASE_Y + Math.floor(currentCount / rowCount) * OFFSET_Y;

      const content = desktopApps[type] || null;

      const newPosition: WindowPosition = {
        id: newId,
        x: newX,
        y: newY,
        type,
        content,
      };

      setPositions((prev) => [...prev, newPosition]);
      setActiveId(newId);
    },
    [BASE_X, BASE_Y, positions.length]
  );

  const removeSquare = useCallback((id: number) => {
    setPositions((prev) => prev.filter((pos) => pos.id !== id));
  }, []);

  const handleDrag = useCallback((id: number, x: number, y: number) => {
    setPositions((prev) =>
      prev.map((pos) => (pos.id === id ? { ...pos, x, y } : pos))
    );
  }, []);

  const handleSquareClick = (id: number) => {
    setActiveId(id);
  };

  return {
    positions,
    activeId,
    addSquare,
    removeSquare,
    handleDrag,
    handleSquareClick,
  };
};
