import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";

export const Header = () => {
  const [draweropen, setDrawerOpen] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#2f2f2f",
        boxShadow: "none",
        padding: "10px 0px",
      }}
    >
      <ToolBar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Event</div>
        </div>
        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer
          open={draweropen}
          onClose={(value) => toggleDrawer(value)}
        />
      </ToolBar>
    </AppBar>
  );
};
export default Header;
