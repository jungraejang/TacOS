// useContextMenu.js or useContextMenu.ts if you're using TypeScript
import { useState } from "react";

const useContextMenu = () => {
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const showContextMenu = (event: any) => {
    event.preventDefault();
    const menuWidth = 200; // Adjust as needed
    const menuHeight = 150; // Adjust as needed
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const posX = mouseX + menuWidth > screenW ? mouseX - menuWidth : mouseX;
    const posY = mouseY + menuHeight > screenH ? mouseY - menuHeight : mouseY;

    setContextMenu({
      visible: true,
      x: posX,
      y: posY,
    });
  };

  const hideContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

  return { contextMenu, showContextMenu, hideContextMenu };
};

export default useContextMenu;
