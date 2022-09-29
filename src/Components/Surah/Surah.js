import React from "react";
// import SurahText from "../SurahText/SurahText";
import { HiOutlineBookOpen } from "react-icons/hi";
import { useState, useEffect } from "react";
import "./Surah.css";
import Modal from "../Modal/Modal";

const baseUrl = "https://api.quran.com/api/v4/";
const Surah = ({
  name_simple,
  name_arabic,
  id,
  changeID,
  surahText,
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
