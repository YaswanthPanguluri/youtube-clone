import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow icon = {HomeIcon}title = "Home"/>
      <SidebarRow icon = {WhatshotIcon}title = "Trending"/>
      <SidebarRow icon = {SubscriptionsIcon}title = "Subscription"/>
    </div>
  );
}

export default Sidebar;
