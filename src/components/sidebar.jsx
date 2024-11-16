import React from "react";
import SidebarItem from "./sidebarItem";
import SidebarWrapper from "./sidebarWrapper";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../services/slices/darkmodeSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleDarkMode());
  return (
    <SidebarWrapper>
      <SidebarItem path="/" icon="uil uil-dashboard" name="Dashboard" />
      <SidebarItem path="/" icon="uil uil-user" name="Profile" />
      <SidebarItem path="/" icon="uil uil-users-alt" name="Users" />
      <SidebarItem icon="uil uil-signout" name="Logout" />
      <SidebarItem toggle={toggle} darkmodeItem />
    </SidebarWrapper>
  );
};

export default React.memo(Sidebar);
