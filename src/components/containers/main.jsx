import React from "react";
import Calculate from "./calculate";
import Service from "./service";
import Sectionone from "./sectionone";
import Sectiontwo from "./sectiontwo";
import Slider from "../slider/slider";
import Sectionthree from "./sectionthree";
import Sectionfour from "./sectionfour";
import Sectionfive from "./sectionfive";

const Main = () => {
  return (
    <div className="container m-auto px-14">
      <Calculate />
      <Service />
      <Sectionone />
      <Sectiontwo />
      <Slider />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
    </div>
  );
};

export default Main;
