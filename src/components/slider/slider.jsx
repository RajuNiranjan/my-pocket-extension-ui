import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x600",
    "https://via.placeholder.com/600x400",
  ];

  const data = [
    {
      quot: "Being an international student, I needed reliable dissertation help, and ProjectsDeal exceeded my expectations. Their team provided exceptional dissertation, ensuring my literature review was comprehensive and aligned with my research objectives. Their expert writers delivered a well-structured and cohesive complete dissertation. I'm grateful for their assistance!",
      auther: "Chinedu Okonkwo",
    },
    {
      quot: "ProjectsDeal has been my go-to source for law dissertation help. Their writers have a deep understanding of conducting research and deliver well-researched and engaging dissertation. I couldn't have asked for better final dissertation!",
      auther: "Jennifer Thompson",
    },
    {
      quot: "Working part-time while writing my dissertation was challenging, but ProjectsDeal made it easier for me. Their dissertation assistance was exceptional, and I was able to focus on my job while they took care of my research. Their expert writers conducted an extensive literature review, which strengthened the credibility of my dissertation. Highly recommended!",
      auther: "Olivia Smith",
    },
    {
      quot: "ProjectsDeal surpassed my expectations with their exceptional support throughout my dissertation journey. Their team conducted thorough SPSS analysis, strengthening the reliability of my research findings. Final dissertation is of outstanding quality. I highly recommend their services!",
      auther: "Thomas Johnson",
    },
  ];

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider w-full">
      <div className="slider-images">
        {data.map((data, index) => (
          <div
            key={index}
            className={`slider-image ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${data})` }}>
            <div className="bg-white h-40  p-5 text-center flex flex-col gap-2 ">
              <p>{data.quot}</p>
              <span className="text-yellow-500">★★★★★</span>
              <p>- {data.auther}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button className="slider-btn prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="slider-btn next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Slider;
