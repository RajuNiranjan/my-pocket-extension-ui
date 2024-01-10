import React, { useState } from "react";
// import "./styles.css";

const InputForm = () => {
  const [academicLevel, setAcademicLevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted academic level:", academicLevel);
  };

  return (
    <form id="academicForm" onSubmit={handleSubmit} className="">
      <select
        className="w-[400px] h-8 rounded-sm"
        id="academicLevel"
        name="academicLevel"
        value={academicLevel}
        onChange={(e) => setAcademicLevel(e.target.value)}>
        <option value="">- Please Select Academic Level -</option>
        <option value="masters">Masters</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="phd">PhD</option>
      </select>
    </form>
  );
};

export default InputForm;
