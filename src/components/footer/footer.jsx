import React from "react";
import inc from "../../assets/Inc-Verification.png";
import { IoHome } from "react-icons/io5";
import { FaDesktop } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io5";

const icons = [
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <FaYoutube />,
  },
  {
    icon: <AiFillInstagram />,
  },
  {
    icon: <FaPinterest />,
  },
  {
    icon: <FaLinkedin />,
  },
  {
    icon: <IoLogoWhatsapp />,
  },
  {
    icon: <IoLogoGoogle />,
  },
];

const Footer = () => {
  return (
    <>
      <div className=" font-serif bg-[#10151c] p-5">
        <div className=" grid grid-cols-4 gap-5 container m-auto italic text-slate-300">
          <div className="">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">
                <IoHome />
              </span>
              <h1 className="text-yellow-500 font-bold capitalize text-sm">
                about us
              </h1>
            </div>
            <p className="text-sm">
              <span className="font-bold italic">
                Established in 2001, Projectsdeal was conceived with the vision
                to provide the best dissertation writing services in the UK
              </span>
              through well-written dissertation, thesis, essay, research paper,
              term paper and book report, that will enable our clients secure a
              good career and make their parents proud.
            </p>
            <p className="text-sm">
              Thanks to your continued love and support, we have recently added
              134 new professional experts on board in addition to our current
              team.
            </p>
            <p>More about Projectsdeal</p>
          </div>
          <div>
            <div className="flex gap-1 justify-start">
              <span className="text-blue-500">
                <FaDesktop />
              </span>
              <h1 className="text-yellow-500 font-bold capitalize text-sm">
                {" "}
                We are the Only Legitimate Dissertation Writing Service that is
                Trusted & Ranked on Inc, Safe to Order Online:
              </h1>
            </div>
            <img className="w-32" src={inc} alt="" />
            <div className="text-sm">
              <p className="flex items-center gap-1">
                <span>
                  <IoIosCall />
                </span>{" "}
                020 3290 0046
              </p>
              <p>CONTACT US</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">
                <IoChatbubbles />
              </span>
              <h1 className="text-yellow-500 font-bold capitalize text-sm">
                Dissertation Related Services
              </h1>
            </div>
            <ul className="text-sm">
              <li>Dissertation Topics</li>
              <li>Do My Dissertation</li>
              <li>Dissertation Proposal Writing Service</li>
              <li>Literature Review Writing Service</li>
              <li>Masters Dissertation Writing Service</li>
              <li>PhD Dissertation Writing Service</li>
            </ul>
            <p>Calculate Dissertation Writing</p>
          </div>
          <div>
            <div className="flex   gap-2">
              <span className="felx items-start text-blue-500 ">
                <FaListAlt />
              </span>
              <h1 className="text-yellow-500 font-bold capitalize text-sm">
                {" "}
                For Urgent Deadline
              </h1>
            </div>
            <p className="text-sm">Whatsapp: +44 7447 882377</p>
          </div>
        </div>
      </div>
      <div className="bg-[#1a202a] flex justify-center flex-col items-center  p-10 italic">
        <div className="font-serif flex justify-center items-center">
          {icons.map((icon) => (
            <div className="border border-white p-1 max-w-max justify-center flex items-center rounded-full cursor-pointer mr-2">
              <span className="text-white  rounded-full">{icon.icon}</span>
            </div>
          ))}
        </div>
        <div className="font-serif italic text-center text-white text-sm mt-2">
          <p className="text-blue-500">Corporate Address:</p>
          <p>10 Upper Bank Street London, London E145GH United Kingdom</p>
          <p>Telephone: + 44 (0)20 3290 0046</p>
          <p>Copyright © 2001-2024 Projectsdeal. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
