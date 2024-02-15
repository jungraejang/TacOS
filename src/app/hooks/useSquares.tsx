// hooks/useSquares.ts
import { useState, useRef, useCallback } from "react";
import { WindowPosition, desktopApps } from "@/app/types/desktop.type";

const useSquares = () => {
  const [positions, setPositions] = useState<Array<WindowPosition>>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const idCounter = useRef(0);

  const BASE_X = 50; // Assuming these are your base positions and offsets
  const BASE_Y = 50;
  const OFFSET_X = 110;
  const OFFSET_Y = 110;

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
    [positions]
  );

  const removeSquare = useCallback((id: number) => {
    setPositions((prev) => prev.filter((pos) => pos.id !== id));
  }, []);

  const handleDrag = useCallback((id: number, x: number, y: number) => {
    setPositions((prev) =>
      prev.map((pos) => (pos.id === id ? { ...pos, x, y } : pos))
    );
  }, []);

  return { positions, activeId, addSquare, removeSquare, handleDrag };
};
