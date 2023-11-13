import React from "react";
import "./SurahText.css";
const SurahText = ({ ayahText }) => {
  return (
    <div className="text-white text-container">
      {ayahText.map((ayah, index) => {
        return (
          <div key={index} className="flex mb-4 items-start justify-start">
            <div className="bg-lightGray mt-3 h-8 px-1 py-1 flex items-center rounded-lg text-center text-md flex-none">
              {index + 1}
            </div>
            <p className="px-5  leading-[4rem]">{ayah}</p>
          </div>
        );
      })}
    </div>
  );
};


export default SurahText;
