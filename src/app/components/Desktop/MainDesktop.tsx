import React, { useEffect, useRef, useState } from "react";
import Window from "../Window/Window";
import DesktopIcon from "./DesktopIcon";
import ContextMenu from "../common/ContextMenu"; // Adjust the import path if necessary
import { MenuItem, desktopIcons } from "@/app/types/desktop.type";
import { useSquares } from "../../hooks/useSquares"; // Adjust the import path if necessary
import useContextMenu from "@/app/hooks/useContextMenu";

const MainDesktop = () => {
  const {
    positions,
    activeId,
    addSquare,
    removeSquare,
    handleDrag,
    handleSquareClick,
  } = useSquares();

  const { contextMenu, showContextMenu, hideContextMenu } = useContextMenu();

  const desktopRef = useRef<HTMLDivElement>(null);
  const [resetKey, setResetKey] = useState(0);

  const resetIcons = () => {
    setResetKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  // Prepare menu items for the context menu
  const menuItems: MenuItem[] = [
    {
      label: "Display Setting",
      action: () => console.log("Display Setting clicked"),
    },
    {
      label: "Reset Icons",
      action: resetIcons,
    },
    {
      label: "Other Settings",
      action: () => console.log("Other Settings clicked"),
    },
    {
      label: "About",
      action: () => addSquare("About"), // Assuming 'About' is handled within `addSquare`
    },
  ];

  return (
    <div
      className="w-full h-screen relative"
      style={{ touchAction: "none" }}
      onContextMenu={showContextMenu}
      onClick={hideContextMenu}
      ref={desktopRef}
    >
      {positions.map((pos) => (
        <Window
          key={pos.id}
          id={pos.id}
          x={pos.x}
          y={pos.y}
          onDrag={(event, info) => {
            console.log(info); // Check the structure of info
            if (info && info.point) {
              handleDrag(pos.id, info.point.x, info.point.y);
            }
          }}
          onRemove={() => removeSquare(pos.id)}
          type={pos.type}
          isActive={pos.id === activeId}
          onClick={() => handleSquareClick(pos.id)}
        >
          {pos.content}
        </Window>
      ))}
      {contextMenu.visible && (
        <ContextMenu
          visible={contextMenu.visible}
          x={contextMenu.x}
          y={contextMenu.y}
          menuItems={menuItems}
        />
      )}
      <div className="absolute left-5 top-5 space-y-8" key={resetKey}>
        {desktopIcons.map(({ Icon, label, type }) => (
          <DesktopIcon
            key={type}
            Icon={Icon}
            label={label}
            onDoubleClick={() => addSquare(type)}
            desktopRef={desktopRef}
          />
        ))}
      </div>
    </div>
  );
};

export default MainDesktop;
