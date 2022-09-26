import React from "react";
import SurahText from "../SurahText/SurahText";
import { HiOutlineBookOpen } from "react-icons/hi";
import { useState, useEffect } from "react";
import "./Surah.css";

const baseUrl = "https://api.quran.com/api/v4/";
const Surah = ({ name_simple, name_arabic, id, changeID, surahText }) => {
  const [ShowSurahText, setShowSurahText] = useState(false);
  const selectSurah = () => {
    changeID(id);
  };
  if (ShowSurahText) {
    return <SurahText ayahText={surahText} />;
  } else {
    return (
      <article className="surah" onClick={selectSurah}>
        <button id="read-btn">
          <HiOutlineBookOpen onClick={() => setShowSurahText(!ShowSurahText)} />
        </button>
        <p>{name_arabic}</p>
        <p>{name_simple}</p>
      </article>
    );
  }
};
export default Surah;
