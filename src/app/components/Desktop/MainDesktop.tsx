import React, { useRef, useState } from "react";
import Window from "../Window/Window";
import DesktopIcon from "./DesktopIcon";
import ContextMenu from "./DesktopContextMenu"; // Import the ContextMenu component
import {
  IconType,
  WindowPosition,
  desktopApps,
  desktopIcons,
} from "@/app/types/desktop_type";

const MainDesktop = () => {
  const [positions, setPositions] = useState<Array<WindowPosition>>([]);

  const [activeId, setActiveId] = useState<number | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
  }>({ visible: false, x: 0, y: 0 });
  const [resetKey, setResetKey] = useState(0);

  const desktopRef = useRef(null); // Create a ref for the desktop area

  const idCounter = useRef(0);

  // Adjust these values as needed
  const BASE_X = window.innerWidth / 2 - 50;
  const BASE_Y = window.innerHeight / 2 - 50;
  const OFFSET_X = 110; // Square width + gap
  const OFFSET_Y = 110; // Square height + gap

  const resetIcons = () => {
    setResetKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  const handleDrag = (id: number, event: any, info: any) => {
    setPositions(
      positions.map((pos) => {
        if (pos.id === id) {
          return {
            ...pos, // Spread existing properties to retain them, including `content`
            x: info.point.x, // Update position
            y: info.point.y,
          };
        }
        return pos;
      })
    );
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleSquareClick = (id: number) => {
    setActiveId(id);
  };

  const handleClick = () => {
    if (contextMenu.visible) {
      setContextMenu({ ...contextMenu, visible: false });
    }
  };

  const addSquare = (type: string) => {
    const newId = idCounter.current++;
    const currentCount = positions.length;
    const rowCount = Math.floor(window.innerWidth / OFFSET_X);
    const newX = BASE_X + (currentCount % rowCount) * OFFSET_X;
    const newY = BASE_Y + Math.floor(currentCount / rowCount) * OFFSET_Y;

    // Determine the content based on the type
    const content = desktopApps[type] || null;

    const newPosition: WindowPosition = {
      id: newId,
      x: newX,
      y: newY,
      type,
      content,
    };

    setPositions([...positions, newPosition]);
    setActiveId(newId); // Optionally set the new window as active
  };

  const removeSquare = (id: number) => {
    setPositions(positions.filter((pos) => pos.id !== id));
  };

  return (
    <div
      className="w-full h-screen relative"
      style={{ touchAction: "none" }}
      onContextMenu={handleContextMenu}
      onClick={handleClick}
      ref={desktopRef}
    >
      {positions.map((pos) => (
        <Window
          key={pos.id}
          id={pos.id}
          x={pos.x}
          y={pos.y}
          onClick={() => handleSquareClick(pos.id)}
          onDrag={handleDrag}
          onRemove={removeSquare}
          type={pos.type}
          isActive={pos.id === activeId}
        >
          {pos.content} {/* Render specific content if any */}
        </Window>
      ))}
      {contextMenu.visible && (
        <ContextMenu
          visible={contextMenu.visible}
          x={contextMenu.x}
          y={contextMenu.y}
          onResetIcons={resetIcons}
          onAddSquare={addSquare}
        />
      )}
      <div className="absolute left-5 top-5 space-y-8" key={resetKey}>
        {desktopIcons.map(({ Icon, label, type }) => (
          <DesktopIcon
            key={type}
            desktopRef={desktopRef}
            Icon={Icon}
            label={label}
            onDoubleClick={() => addSquare(type)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainDesktop;
