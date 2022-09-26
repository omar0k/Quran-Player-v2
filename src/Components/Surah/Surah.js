import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import { useState, useEffect } from "react";
import "./Surah.css";

const baseUrl = "https://api.quran.com/api/v4/";

const Surah = ({ name_simple, name_arabic, id, loadSurah, changeID }) => {
  const selectSurah = () => {
    changeID(id);
  };
  return (
    <article className="surah" onClick={selectSurah}>
      <button id="read-btn">
        <HiOutlineBookOpen />
      </button>
      <p>{name_arabic}</p>
      <p>{name_simple}</p>
    </article>
  );
};
export default Surah;
