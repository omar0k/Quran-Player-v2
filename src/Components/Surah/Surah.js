import React from "react";
// import SurahText from "../SurahText/SurahText";
import { HiOutlineBookOpen } from "react-icons/hi";

const Surah = ({
  name_simple,
  name_arabic,
  id,
  changeID,
  showModal,
  setShowModal,
}) => {
  const selectSurah = () => {
    changeID(id);
  };
  const readingMode = () => {
    setShowModal(!showModal);
    changeID(id);
  };
  return (
    <div className="relative  ">
      <div
        className=" bg-lightGray text-2xl text-center font-bold text-gray-300 py-5 rounded-xl cursor-pointer font-cairo hover:bg-opacity-30 border border-lightGray hover:border-accentBlue transition-all duration-100 hover:border-opacity-20"
        onClick={selectSurah}
      >
        <p>{name_arabic}</p>
        <p>{name_simple}</p>
      </div>
      <div>
        <button className="absolute right-4 hover:text-3xl transition-all duration-200 top-4 text-2xl text-blue-300">
          <HiOutlineBookOpen onClick={readingMode} />
        </button>
      </div>
    </div>
  );
};
export default Surah;
