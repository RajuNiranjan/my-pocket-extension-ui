import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { MdDoNotDisturb } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { FaLock } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaRegFile } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaMoneyBillAlt } from "react-icons/fa";
import ordernow from "../../assets/order-now.png";

const icons = [
  {
    icon: <BiSolidLike />,
    heading: "Premium Quality",
    desc: "Projectsdeal is Gold Standard in Academic Research & Writing",
  },
  {
    icon: <MdDoNotDisturb />,
    heading: "Plagiarism Free",
    desc: "Use Official License of Turnitin to Validate <6% plagiarism",
  },
  {
    icon: <LuClock3 />,
    heading: "Meeting Deadline",
    desc: "Projectsdeal team values on-time submission. We deliver before the deadline. Relax!",
  },
  {
    icon: <FaLock />,
    heading: "100% Privacy",
    desc: "Follow Strict Code of Confidentiality. We are known for HIGH Business Ethics.",
  },
  {
    icon: <FaMoneyBillAlt />,
    heading: "100% Privacy",
    desc: "Follow Strict Code of Confidentiality. We are known for HIGH Business Ethics.",
  },
  {
    icon: <IoIosCall />,
    heading: "Affordable Prices",
    desc: "Every year if more than 80% of your own class can afford it, you can surely! Your work be worth every pound spend.",
  },
  {
    icon: <FaRegFile />,
    heading: "Dedicated Team",
    desc: "Dedicated Personal Managers to ensure high level of service experience.",
  },
  {
    icon: <LuRefreshCw />,
    heading: "Free Revision",
    desc: "We understand that your supervisor is our client! We prioritize your success above all else, so feel free to request any number of modifications.",
  },
];

const Sectiontwo = () => {
  return (
    <section>
      <div className="">
        <h1 className="text-center text-[42px] text-blue-700">
          What makes Projectsdeal UK #1 Dissertation Writing Service
        </h1>
        <div className="grid grid-cols-4 gap-3 text-center">
          {icons.map((i) => (
            <div className="flex  items-center flex-col gap-1 my-10">
              <div className="bg-[#454545] text-white w-max p-2 rounded-full  ">
                <span className="text-xl">{i.icon}</span>
              </div>
              <h1 className="font-bold text-2xl">{i.heading}</h1>
              <p className="font-light text-[16px]">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center flex justify-center items-center flex-col gap-3">
        <h1 className="text-[40px] text-red-500 font-bold">
          Simply get rid of your Dissertation worries Now:
        </h1>
        <ol className="text-[30px]">
          <li>1. Just select your domain</li>
          <li>2. Choose the exact word count</li>
          <li>3. Select the final submission date</li>
          <li>4. Get instant pricing</li>
        </ol>
        <img className="w-[400px]" src={ordernow} alt="" />
      </div>
    </section>
  );
};

export default Sectiontwo;
