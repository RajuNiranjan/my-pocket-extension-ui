import React from "react";

const Inpurarea = (props) => {
  return (
    <div className=" py-2">
      <input
        className="w-[500px] ml-[-5px] py-1 px-2 rounded-sm focus:outline-none"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Inpurarea;
