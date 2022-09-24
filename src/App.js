import React, { useState, useEffect } from "react";
import Surah from "./Components/Surah/Surah";
import "./App.css";
import Player from "./Components/Player/Player";
import Navbar from "./Components/Navbar/Navbar";
const baseUrl = "https://api.quran.com/api/v4/";

function App() {
  const [AyahIndex, setAyahIndex] = useState(0);
  const [chapters, setChapters] = useState([]);
  const [verses, setVerses] = useState([]);
  const [chapterID, setChapterID] = useState(0);
  const [recitations, setRecitations] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}chapters`)
      .then((response) => response.json())
      .then((data) => setChapters(data.chapters));
  }, []);
  useEffect(() => {
    fetch(`${baseUrl}/verses/by_chapter/1`)
      .then((response) => response.json())
      .then((data) => setVerses(data));
  }, []);
  const handleChange = (e) => {
    const val = e.target.value;
    setChapterID(e.target.value);
  };
  console.log("chap", chapterID);
  return (
    <>
      <Navbar />
      <select id="surah-dropdown" onChange={handleChange}>
        {chapters.map((chapter, index) => {
          return (
            <option key={index} value={index + 1}>
              {chapter.name_simple}
            </option>
          );
        })}
      </select>
      <section className="surahs">
        {chapters.map((chapter, index) => {
          return (
            <Surah
              key={index}
              {...chapter}
              stateVerses={[verses, setVerses]}
              stateRecitations={[recitations, setRecitations]}
              ayahState={[AyahIndex, setAyahIndex]}
            />
          );
        })}
      </section>
      <footer>
        <Player
          reciationsURLS={recitations}
          ayahState={[AyahIndex, setAyahIndex]}
          ayahText={[verses, setVerses]}
        />
      </footer>
    </>
  );
}
export default App;
