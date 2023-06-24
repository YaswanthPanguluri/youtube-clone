import React from "react";
import "./Header.css";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"
          alt=""
        />
      </div>
      <div className="header__input">
        <input placeholder = "Search" type="text" />
        <SearchIcon className="heder__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="Yaswanth Panguluri"
          src="https://avatars.githubusercontent.com/u/72020268?v=4"
        />
      </div>
    </div>
  );
}

export default Header;
