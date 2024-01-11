import React from "react";
import logo from "../../assets/logo.png";

const data = [
  // Home
  // Dissertation
  // Coursework Help
  // Research Paper Help
  // Dissertation Topics
  // Dissertation Examples
  // Dissertation Structure
  // Essay Help
  // PhD Proposal
  // PhD Thesis
  // Assignment Help
  // Blog

  {
    text: "Home",
  },
  {
    text: "Dissertation",
  },
  {
    text: "Coursework Help",
  },
  {
    text: "Research Paper Help",
  },
  {
    text: "Dissertation Topics",
  },
  {
    text: "Dissertation Examples",
  },
  {
    text: "Dissertation Structure",
  },
  {
    text: "Essay Help",
  },
  {
    text: "PhD Proposal",
  },
  {
    text: "PhD Thesis",
  },
  {
    text: "Assignment Help",
  },
  {
    text: "Blog",
  },
];

const Navbar = () => {
  return (
    <div className="font-serif sticky top-0 z-30">
      <div className="bg-[#092d50] text-white px-20 py-5 flex justify-between items-center">
        <div>
          <img className="w-36" src={logo} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <div>
            <p className="italic font-bold ">
              <span className="text-[18px]">
                No. 1 Dissertation Writing Services in UK,
              </span>
              <span className="text-[16px] text-yellow-500"> Since 2001!</span>
            </p>
          </div>
          <div className="bg-blue-500 p-1 rounded-sm">
            <p className="text-[16px]">call:+442032900046</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500">
        <ul className="grid grid-cols-12 text-center h-full ">
          {data.map((item) => (
            <li className="italic text-md cursor-pointer felx justify-center items-center text-[13px] h-full hover:bg-yellow-400 p-2 ">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
