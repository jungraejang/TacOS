import React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; // Recycle
import LanguageIcon from "@mui/icons-material/Language"; // Internet
import EmailIcon from "@mui/icons-material/Email"; // Email
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"; // Games
import CalculateIcon from "@mui/icons-material/Calculate";
import Calculator from "../components/Calculator";
import About from "../components/About";
import DisplayPanel from "../components/DisplaySetting/DisplaySettingPanel";
import ISSTracker from "../components/ISSTracker";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
export interface MenuItem {
  label: string;
  action: () => void;
}

export interface IconType {
  Icon: React.ElementType;
  label: string;
  type: string;
}

export interface WindowPosition {
  id: number;
  x: number;
  y: number;
  type?: string;
  content?: React.ReactNode;
}

//list for desktop icons
export const desktopIcons: IconType[] = [
  { Icon: ComputerIcon, label: "My Computer", type: "MyComputer" },
  { Icon: FolderSharedIcon, label: "My Documents", type: "MyDocuments" },
  { Icon: DeleteOutlineIcon, label: "Recycle", type: "Recycle" },
  { Icon: LanguageIcon, label: "Internet", type: "Internet" },
  { Icon: EmailIcon, label: "Email", type: "Email" },
  { Icon: SportsEsportsIcon, label: "Games", type: "Games" },
  { Icon: CalculateIcon, label: "Calculator", type: "Calculator" },
  { Icon: SatelliteAltIcon, label: "ISS Tracker", type: "ISSTracker" },
];
// list for apps
export const desktopApps: Record<string, React.ReactNode> = {
  Calculator: <Calculator />,
  About: <About />,
  DisplaySetting: <DisplayPanel />,
  ISSTracker: <ISSTracker />,
  // Add other types and their corresponding components here
};
