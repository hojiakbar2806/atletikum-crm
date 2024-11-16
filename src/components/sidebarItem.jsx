import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Switch from "./switch";

const SidebarItem = ({ path, icon, name, toggle, darkmodeItem }) => {
  const darkmode = useSelector((state) => state.darkmode);
  const expand = useSelector((state) => state.expand);

  const unVisibleClass = expand ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-3 translate-x-[-100px]";

  icon = darkmodeItem ? (expand ? "uil-moon" : "uil-moon opacity-0") : icon;
  name = darkmodeItem ? (expand ? "Dark Mode" : "Dark Mode") : name;

  return (
    <li className="group relative">
      <NavLink
        to={path}
        className="h-14 flex items-center gap-2 p-2 relative"
        aria-label={name}
      >
        <i
          className={` ${icon} text-gray-400 dark:text-gray-50 text-3xl group-hover:text-blue-500 transition-all duration-300`}
        />
        <span
          className={`${unVisibleClass} whitespace-nowrap flex-1 text-lg text-gray-400 group-hover:text-blue-500 transition-all duration-300`}
        >
          {name}
        </span>

        {darkmodeItem ? (
          <div className={`absolute right-0`}>
            <Switch onClick={toggle} checked={darkmode} />
          </div>
        ) : null}
{/* 
        <span
          className={`${
            !expand ? "group-hover:left-14" : "left-[-200px]"
          } whitespace-nowrap group-hover:opacity-100  shadow-md absolute top-1/3 opacity-0 left-0 text-sm text-white bg-blue-500 rounded-md px-2 transition-all duration-300`}
        >
          {name}
        </span> */}
      </NavLink>
    </li>
  );
};

export default React.memo(SidebarItem);
