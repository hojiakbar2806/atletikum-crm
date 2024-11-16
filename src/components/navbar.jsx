import React from "react";
import { toggleExpand } from "../services/slices/expandSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const expand = () => dispatch(toggleExpand());

  return (
    <nav className="sticky shadow transition-all duration-300 dark:text-white dark:bg-slate-800 dark:shadow-[white] top-0 flex items-center justify-between p-6 h-[70px] bg-white">
      <button onClick={expand} id="al" aria-label="Expand sidebar">
        <i className="uil uil-list-ul text-2xl"></i>
      </button>
      <label
        htmlFor="search"
        className="w-3/6 border-[1px] rounded-md p-2 flex items-center"
      >
        <i className="uil uil-search"></i>
        <input
          className="pl-2 w-full border-none bg-transparent outline-none"
          type="search"
          name="search"
          id="search"
          aria-label="Search"
        />
      </label>

      <div></div>
    </nav>
  );
};

export default Navbar;
