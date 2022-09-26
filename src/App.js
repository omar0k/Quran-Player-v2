import React, { useState, useEffect } from "react";
import Surah from "./Components/Surah/Surah";
import "./App.css";
import Player from "./Components/Player/Player";
import Navbar from "./Components/Navbar/Navbar";
const baseUrl = "https://api.quran.com/api/v4/";
const audioUrl = "https://verses.quran.com/";

function App() {
  const [showSurah, setShowSurah] = useState(false);
  const [AyahIndex, setAyahIndex] = useState(0);
  const [chapters, setChapters] = useState([]);
  const [verses, setVerses] = useState([]);
  const [chapterID, setChapterID] = useState(0);
  const [recitations, setRecitations] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}chapters`)
      .then((response) => response.json())
      .then((data) => {
        setChapters(data.chapters);
      });
  }, []);
  useEffect(() => {
    fetch(`${baseUrl}/verses/by_chapter/1`)
      .then((response) => response.json())
      .then((data) => {
        setVerses(data);
      });
  }, []);

  useEffect(() => {
    console.log("useeff", chapterID);
    loadSurah();
  }, [chapterID]);
  const loadSurah = () => {
    let reciationsUrls = [];
    let AyahsAudio = [];
    let textVerses = [];
    let AyahsText = [];
    setAyahIndex(0);
    Promise.all([
      fetch(
        `${baseUrl}/quran/verses/uthmani?chapter_number=${chapterID}}`
      ).then((response) => response.json()),
      fetch(`${baseUrl}/quran/recitations/3/?chapter_number=${chapterID}`).then(
        (response) => response.json()
      ),
    ]).then((data) => {
      reciationsUrls = data[1].audio_files;
      reciationsUrls.forEach((element) => {
        AyahsAudio.push(audioUrl + element.url);
      });
      textVerses = data[0].verses;
      textVerses.forEach((element) => {
        AyahsText.push(element.text_uthmani);
      });
      setVerses(AyahsText);
      setRecitations(AyahsAudio);
    });
  };
  return (
    <>
      <Navbar changeID={setChapterID} chapters={chapters} chapID={chapterID} />
      <section className="surahs">
        {chapters.map((chapter, index) => {
          return (
            <Surah
              surahText={verses}
              key={index}
              {...chapter}
              changeID={setChapterID}
              loadSurah={loadSurah}
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
