import React, { useRef, useState } from "react";
import Window from "./Window";
import ComputerIcon from "@mui/icons-material/Computer";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; // Recycle
import LanguageIcon from "@mui/icons-material/Language"; // Internet
import EmailIcon from "@mui/icons-material/Email"; // Email
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"; // Games
import DesktopIcon from "./DesktopIcon";

const MainDesktop = () => {
  const [positions, setPositions] = useState<
    Array<{ id: number; x: number; y: number; type?: string }>
  >([]);
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
    const squareBeingDragged = positions.find((pos) => pos.id === id);
    const newPosition = {
      id,
      x: info.point.x,
      y: info.point.y,
      type: squareBeingDragged?.type,
    };
    setPositions(positions.map((pos) => (pos.id === id ? newPosition : pos)));
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
    const rowCount = Math.floor(window.innerWidth / OFFSET_X);
    const currentCount = positions.length;
    const newX = BASE_X + (currentCount % rowCount) * OFFSET_X;
    const newY = BASE_Y + Math.floor(currentCount / rowCount) * OFFSET_Y;
    const newId = idCounter.current++; // Generate the new ID beforehand

    const newPosition = {
      id: newId,
      x: newX,
      y: newY,
      type: type,
    };

    setPositions([...positions, newPosition]);
    setActiveId(newId); // Set the new window as active
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
          // onDoubleClick={() => handleFullScreen(pos.id)} // Passing the method here
        />
      ))}
      {contextMenu.visible && (
        <div
          className="absolute bg-white shadow-md rounded-md z-50"
          style={{
            top: `${contextMenu.y}px`,
            left: `${contextMenu.x}px`,
          }}
        >
          <ul className="py-1">
            <li className="px-4 py-2 text-black hover:bg-gray-300 cursor-pointer">
              Display Setting
            </li>
            <li
              className="px-4 py-2 text-black hover:bg-gray-300 cursor-pointer"
              onClick={resetIcons} // Update this line
            >
              Reset Icons
            </li>
            <li className="px-4 py-2 text-black hover:bg-gray-300 cursor-pointer">
              Other Settings
            </li>
            <li className="px-4 py-2 text-black hover:bg-gray-300 cursor-pointer">
              About
            </li>
          </ul>
        </div>
      )}
      <div className="absolute left-5 top-5 space-y-8" key={resetKey}>
        {" "}
        {/* Adjust left and top as needed */}
        <DesktopIcon
          Icon={ComputerIcon}
          desktopRef={desktopRef}
          label="My Computer"
          onDoubleClick={() => addSquare("My Computer")}
        />
        <DesktopIcon
          Icon={FolderSharedIcon}
          label="My Documents"
          desktopRef={desktopRef}
          onDoubleClick={() => addSquare("My Documents")}
        />
        <DesktopIcon
          Icon={DeleteOutlineIcon}
          label="Recycle"
          desktopRef={desktopRef}
          onDoubleClick={() => addSquare("Recycle")}
        />
        <DesktopIcon
          Icon={LanguageIcon}
          label="Internet"
          desktopRef={desktopRef}
          onDoubleClick={() => addSquare("Internet")}
        />
        <DesktopIcon
          Icon={EmailIcon}
          label="Email"
          desktopRef={desktopRef}
          onDoubleClick={() => addSquare("Email")}
        />
        <DesktopIcon
          Icon={SportsEsportsIcon}
          label="Games"
          desktopRef={desktopRef}
          onDoubleClick={() => addSquare("Games")}
        />
      </div>{" "}
    </div>
  );
};

export default MainDesktop;
