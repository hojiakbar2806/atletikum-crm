import React from "react";
import { useSelector } from "react-redux";

const SidebarWrapper = ({ children }) => {
  const expand = useSelector((state) => state.expand);

  const minimizeClass = expand ? "w-[300px]" : "w-[80px]";
  const unVisibleClass = expand ? "opacity-100" : "opacity-0";
  return (
    <aside
      className={`${minimizeClass} dark:bg-gray-800 sticky top-0 left-0 flex flex-col justify-center h-screen  bg-white shadow dark:shadow-[white] transition-all duration-300`}
    >
      <header className="group ml-3 flex items-center gap-2 ">
        <img
          className="w-14 h-11 rounded-full group-hover:scale-110 transition-all duration-300"
          src="https://logowik.com/content/uploads/images/906_emailsymbol.jpg"
          alt=""
        />
        <span
          className={`${unVisibleClass} flex-1 text-lg text-gray-400 transition-all duration-300`}
        >
          Atletikum
        </span>
      </header>

      <div className="mt-10 h-[calc(100vh-110px)] flex flex-col justify-between p-4">
        <ul>{children.slice(0, -2)}</ul>
        <ul>{children.slice(-2)}</ul>
      </div>
    </aside>
  );
};

export default React.memo(SidebarWrapper);
