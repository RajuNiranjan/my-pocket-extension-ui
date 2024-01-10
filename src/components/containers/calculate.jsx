import React from "react";
import student from "../../assets/Student3.png";
import banner from "../../assets/projectsdeal_dissertation_writing_services_offer.png";
import service from "../../assets/coursework_writing_services.png";
import InputForm from "../../ui/input/inputselect";
import Inpurarea from "../../ui/input/inputarea";
import { FaCalculator } from "react-icons/fa";

const Calculate = () => {
  return (
    <section className=" my-10 flex h-[600px] gap-5 p-10">
      <div className="basis-[25%]">
        <img className="w-32" src={service} alt="" />
      </div>
      <div className="basis-[50%]">
        <div className="absolute flex">
          <img className="h-[500px]" src={student} alt="" />
          <div>
            <div className="h-[550px] w-[500px] bg-[#0009] rounded-md">
              <div className="p-10 w-full flex flex-col gap-5 justify-center items-center ">
                <InputForm />
                <InputForm />
                <InputForm />
                <InputForm />
                <InputForm />
                <Inpurarea placeholder="Email id:" type="email" />
                <Inpurarea placeholder="Valid mobile number:" type="text" />
                <Inpurarea placeholder="select dd/mm/yyyy" type="date" />
                <div className="flex flex-col justify-center items-center">
                  <button className="flex  items-center gap-2 bg-yellow-500 rounded-md font-bold hover:bg-yellow-400 p-3 mb-2">
                    Click To Calculate
                    <FaCalculator />
                  </button>
                  <h1 className="italic font-bold text-xl text-white">
                    Result is all that Matters!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={banner}
          className="relative w-36 ml-[333px] mt-[-20px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Calculate;
