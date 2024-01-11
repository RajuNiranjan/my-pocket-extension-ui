import React, { useState } from "react";
// import "./styles.css";

const options = [
  {
    dis: "-- Please Select Academic Level --",
    options: [
      {
        option: "Masters",
      },
      {
        option: "Undergraduate",
      },
      {
        option: "PhD",
      },
    ],
  },
  {
    dis: "-- Please Select Domine --",
    options: [
      {
        option: "Account & Finance",
      },
      {
        option: "Art",
      },
      {
        option: "Civil",
      },
    ],
  },
  {
    dis: "-- Please Select Desired Service --",
    options: [
      {
        option: "Assignment",
      },
      {
        option: "Coursework",
      },
      {
        option: "Eassy",
      },
    ],
  },
  {
    dis: "-- Select No. of Words/Pages Domine --",
    options: [
      {
        option: "1000 words ~ 4 pages",
      },
      {
        option: "2000 words ~ 8 pages",
      },
      {
        option: "3000 words ~ 12 pages",
      },
    ],
  },
  {
    dis: "-- Select Tool --",
    options: [
      {
        option: "SPSS",
      },
      {
        option: "STATA",
      },
      {
        option: "Eviews",
      },
      {
        option: "Nvivp",
      },
      {
        option: "Xls Analysis",
      },
      {
        option: "R Programming",
      },
      {
        option: "None",
      },
    ],
  },
];

const InputForm = () => {
  const [academicLevel, setAcademicLevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted academic level:", academicLevel);
  };

  return (
    <form id="academicForm" onSubmit={handleSubmit} className="">
      {options.map((i) => (
        <select
          className="w-[500px] my-3 h-8 rounded-sm"
          id="academicLevel"
          name="academicLevel"
          value={academicLevel}
          onChange={(e) => setAcademicLevel(e.target.value)}>
          <option value="">{i.dis}</option>
          {i.options.map((i) => (
            <option value="masters">{i.option}</option>
          ))}
        </select>
      ))}
    </form>
  );
};

export default InputForm;
