import React from "react";
import student from "../../assets/Student3.png";
import banner from "../../assets/projectsdeal_dissertation_writing_services_offer.png";
import service from "../../assets/coursework_writing_services.png";
import index from "../../assets/index2.png";
import InputForm from "../../ui/input/inputselect";
import Inpurarea from "../../ui/input/inputarea";
import { FaCalculator } from "react-icons/fa";

const Calculate = () => {
  return (
    <section className=" my-10 flex h-[750px] gap-5 p-10">
      <div className="basis-[25%]">
        <img className="w-52" src={service} alt="" />
      </div>
      <div className="basis-[50%]">
        <div className="absolute flex">
          <img className="h-[500px] mt-20" src={student} alt="" />
          <div>
            <div className="h-[650px] w-[550px] bg-[#0009] rounded-md">
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center gap-2 items-center text-center py-5">
                  <img className="w-10" src={index} alt="" />
                  <h1 className="text-4xl text-yellow-500">
                    Calculate Pricing
                  </h1>
                </div>
                <p className="text-[15px] text-white">
                  Just Select Correct Options and Calculate Best Price
                </p>
              </div>

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
                  <button
                    className="flex  items-center gap-2 
                  text-white bg-yellow-500 rounded-md font-bold hover:bg-yellow-400 p-3 mb-2 text-[14px]">
                    Click To Calculate
                    <FaCalculator />
                  </button>
                  <h1 className="italic font-bold text-[20px] text-white">
                    Result is all that Matters!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={banner}
          className="relative w-60 ml-[327px] mt-[-35px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Calculate;
