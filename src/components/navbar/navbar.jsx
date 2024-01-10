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
    <div>
      <div className="bg-[#092d50] text-white px-20 py-5 flex justify-between items-center">
        <div>
          <img className="w-36" src={logo} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <div>
            <p className="italic font-bold ">
              <span className="text-md">
                No. 1 Dissertation Writing Services in UK,
              </span>
              <span className="text-sm text-yellow-500"> Since 2001!</span>
            </p>
          </div>
          <div className="bg-blue-500 p-1 rounded-sm">
            <p>call:+442032900046</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 h-10">
        <ul className="flex justify-between items-center h-full ">
          {data.map((item) => (
            <li className="italic font-semibold cursor-pointer felx justify-center items-center h-full hover:bg-yellow-600 p-2 ">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
