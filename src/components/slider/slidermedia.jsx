import React from "react";

const sliderDataa = [
  {
    quot: "ProjectsDeal surpassed my expectations with their exceptional support throughout my dissertation journey. Their team conducted thorough SPSS analysis, strengthening the reliability of my research findings. Final dissertation is of outstanding quality. I highly recommend their services!",
    author: "Thomas Johnson",
  },
];

const SliderMedia = () => {
  return (
    <div className="bg-white p-3 text-center my-10">
      {sliderDataa.map((data) => (
        <div className="">
          <p className="text-[16px]">{data.quot}</p>
          <p className="text-yellow-400 text-[16px]">★★★★★</p>
          <p className="text-[16px]">- {data.author}</p>
        </div>
      ))}
    </div>
  );
};

export default SliderMedia;
