import React from "react";
import doc from "../../assets/08.png";
import clock from "../../assets/deadline.png";
import pers from "../../assets/satisfaction.png";
import like from "../../assets/experience.png";

const card = [
  {
    icon: like,
    desc: "Ask any 5 of your Own Classmates & we bet at least 3 of them would already be our clients!",
  },
  {
    icon: doc,
    desc: "Over 96% of our clients have scored Merits & Distinctions Since 2001,It's effortless now!",
  },
  {
    icon: pers,
    desc: "Intermediate drafts & Unlimited number of Revisions to flawlessly meet the Supervisors thought process",
  },
  {
    icon: clock,
    desc: "100% Confidentiality, 0% Plagiarism on turnitin, Get Ready for Submission Work",
  },
];

const Sectionfour = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-xl">
          Simply relieve yourself from your dissertation worries in just 1 step:
        </h1>
        <p className="font-bold bg-blue-500 text-white px-3 cursor-pointer py-2 rounded-md font-sans">
          Learn More
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 my-5">
        {card.map((i) => (
          <div className="w-92 flex flex-col items-center p-5 rounded-md bg-gradient-to-t from-blue-950 to-slate-700 gap-3  ">
            <div>
              <img src={i.icon} alt="" />
            </div>
            <p className="text-white">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectionfour;
