import React from "react";

const Switch = ({ onClick, checked }) => {
  return (
    <div
      className={` relative rounded-full inline-flex items-center cursor-pointer transform transition-all ${
        checked ? "bg-blue-500" : "bg-gray-300"
      }`}
      onClick={onClick}
    >
      <span
        className={`w-12 h-6 flex items-center  transition-all duration-300`}
      >
        <span
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
            checked ? "translate-x-7" : "translate-x-1"
          }`}
        ></span>
      </span>
    </div>
  );
};

export default React.memo(Switch);
