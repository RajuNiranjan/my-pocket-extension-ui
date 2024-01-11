import React from "react";
import Vedio from "./vedio";

const Sectionseven = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <Vedio video="https://www.youtube.com/embed/PPFFr51UkS8?si=P5eOYCIWEYJo1pMa" />
        </div>
        <div>
          <p className="text-[20px]">
            <span className="font-bold">Right topic selection:</span>
            <br />
            Projectsdeal will give you viable topics that wont make you hit a
            roadblock. We recommend latest dissertation topic that is
            interesting, with lot of research and contribution scope.
            <br />
            <br />
            <span className="font-bold">
              {" "}
              More access to the library and research data:
            </span>
            <br />
            We have more access to the library than you will ever get, thus
            making us get more primary and secondary research material than you.
            <br />
            <br />
            <span className="font-bold">
              Years of experience and team of expert domain writers:
            </span>
            <br />
            Our writers have more experience than you because they have written
            so many dissertations for several individuals, and this goes on
            every year. We can easily help you score your desired grades.
          </p>
        </div>
      </div>
      <div>
        <p className="text-[20px] my-5 font-light">
          You can calculate custom cost online and order online. Within 15
          minutes, Personal project manager would be assigned, experienced
          dissertation writers will start your work. Allocated manager shall
          stay in touch with you on whatsapp till final successful submission.
        </p>
      </div>
    </div>
  );
};

export default Sectionseven;
