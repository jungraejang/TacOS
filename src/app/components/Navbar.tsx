import React, { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShareIcon from "@mui/icons-material/Share";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavbarContext } from "../context/NavbarContext";

const actions = [
  { icon: <HomeIcon />, name: "Home" },
  { icon: <LibraryBooksIcon />, name: "Archive" },
  { icon: <SearchIcon />, name: "Search" },
  { icon: <AccountCircleIcon />, name: "Account" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { operation, updateOperation } = useNavbarContext();

  function handleClick(e: any, operation: any) {
    setOpen(!open);
    e.preventDefault();
    console.log("You clicked: ", operation);
    // switch (operation) {
    //   case "Home":
    //     window.location.href = "/";
    //     break;
    //   case "Archive":
    //     window.location.href = "/archive";
    //     break;
    //   case "Search":
    //     window.location.href = "/search";
    //     break;
    //   case "Account":
    //     window.location.href = "/account";
    //     break;
    //   default:
    //     break;
    // }
    updateOperation(operation);
  }
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: "absolute",
        bottom: 16,
        left: 16,
      }}
      direction="up"
      FabProps={{ size: "medium", style: { backgroundColor: "#261447" } }}
      icon={<SpeedDialIcon openIcon={<MenuIcon />} />}
      onClick={(e) => {
        e.preventDefault();
        setOpen(!open);
      }}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          className="bg-tangerine"
          key={action.name}
          icon={action.icon}
          onClick={(e) => {
            handleClick(e, action.name);
          }}
          //   tooltipTitle={action.name}
          //   tooltipOpen
          //   tooltipPlacement="right"
        />
      ))}
    </SpeedDial>
  );
};

export default Navbar;
