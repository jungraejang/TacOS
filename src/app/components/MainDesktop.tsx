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

  const idCounter = useRef(0);

  // Adjust these values as needed
  const BASE_X = window.innerWidth / 2 - 50;
  const BASE_Y = window.innerHeight / 2 - 50;
  const OFFSET_X = 110; // Square width + gap
  const OFFSET_Y = 110; // Square height + gap

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

  const handleSquareClick = (id: number) => {
    setActiveId(id);
  };

  const addSquare = (type: string) => {
    const rowCount = Math.floor(window.innerWidth / OFFSET_X);
    const currentCount = positions.length;
    const newX = BASE_X + (currentCount % rowCount) * OFFSET_X;
    const newY = BASE_Y + Math.floor(currentCount / rowCount) * OFFSET_Y;

    const newPosition = {
      id: idCounter.current++,
      x: newX,
      y: newY,
      type: type,
    };
    setPositions([...positions, newPosition]);
  };

  const removeSquare = (id: number) => {
    setPositions(positions.filter((pos) => pos.id !== id));
  };

  return (
    <div className="w-full h-screen relative" style={{ touchAction: "none" }}>
      {positions.map((pos) => (
        <Window
          key={pos.id}
          id={pos.id}
          x={pos.x}
          y={pos.y}
          onClick={() => handleSquareClick(pos.id)} // Add onClick handler
          onDrag={handleDrag}
          onRemove={removeSquare}
          type={pos.type}
          isActive={pos.id === activeId} // Pass isActive based on activeId
        />
      ))}
      <div className="absolute left-5 top-5 space-y-8">
        {" "}
        {/* Adjust left and top as needed */}
        <DesktopIcon
          Icon={ComputerIcon}
          label="My Computer"
          onDoubleClick={() => addSquare("My Computer")}
        />
        <DesktopIcon
          Icon={FolderSharedIcon}
          label="My Documents"
          onDoubleClick={() => addSquare("My Documents")}
        />
        <DesktopIcon
          Icon={DeleteOutlineIcon}
          label="Recycle"
          onDoubleClick={() => addSquare("Recycle")}
        />
        <DesktopIcon
          Icon={LanguageIcon}
          label="Internet"
          onDoubleClick={() => addSquare("Internet")}
        />
        <DesktopIcon
          Icon={EmailIcon}
          label="Email"
          onDoubleClick={() => addSquare("Email")}
        />
        <DesktopIcon
          Icon={SportsEsportsIcon}
          label="Games"
          onDoubleClick={() => addSquare("Games")}
        />
      </div>{" "}
    </div>
  );
};

export default MainDesktop;
