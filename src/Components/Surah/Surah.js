import React from "react";
// import SurahText from "../SurahText/SurahText";
import { HiOutlineBookOpen } from "react-icons/hi";
import "./Surah.css";

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
  return (
    <article className="surah" onClick={selectSurah}>
      <button id="read-btn">
        <HiOutlineBookOpen onClick={() => setShowModal(!showModal)} />
      </button>
      <p>{name_arabic}</p>
      <p>{name_simple}</p>
    </article>
  );
};
export default Surah;
