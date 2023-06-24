import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon = {HomeIcon}title = "Home"/>
      <SidebarRow Icon = {WhatshotIcon}title = "Trending"/>
      <SidebarRow Icon = {SubscriptionsIcon}title = "Subscription"/>
    </div>
  );
}

export default Sidebar;
