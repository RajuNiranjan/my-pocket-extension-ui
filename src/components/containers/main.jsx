import React from "react";
import Calculate from "./calculate";
import Service from "./service";
import Sectionone from "./sectionone";
import Sectiontwo from "./sectiontwo";
import Slider from "../slider/slider";
import Sectionthree from "./sectionthree";
import Sectionfour from "./sectionfour";
import Sectionfive from "./sectionfive";
import Sectionsix from "./sectionsix";
import Sectionseven from "./sectionseven";

const Main = () => {
  return (
    <div className="container m-auto px-14 flex flex-col gap-5">
      <Calculate />
      <Service />
      <Sectionone />
      <Sectiontwo />
      <Slider />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
      <Sectionsix />
      <Sectionseven />
    </div>
  );
};

export default Main;
