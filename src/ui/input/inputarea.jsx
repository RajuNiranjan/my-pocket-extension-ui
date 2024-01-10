import React from "react";

const Inpurarea = (props) => {
  return (
    <div className="w-[450px]">
      <input
        className="w-[400px] py-1 px-3 rounded-sm ml-6 focus:outline-none"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Inpurarea;
