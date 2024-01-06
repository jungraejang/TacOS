import React from "react";
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

const actions = [
  { icon: <HomeIcon />, name: "Home" },
  { icon: <LibraryBooksIcon />, name: "Archive" },
  { icon: <SearchIcon />, name: "Search" },
  { icon: <AccountCircleIcon />, name: "Account" },
];

const Navbar: React.FC = () => {
  function handleClick(e: any, operation: any) {
    e.preventDefault();
    console.log("You clicked: ", operation);
    if (operation == "product") {
      // do something
    } else if (operation == "tag") {
      //do something else
    }
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
