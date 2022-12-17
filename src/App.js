import React, { useState, useEffect } from "react";
import Surah from "./Components/Surah/Surah";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import Player from "./Components/Player/Player";
import Navbar from "./Components/Navbar/Navbar";
const baseUrl = "https://api.quran.com/api/v4/";
const audioUrl = "https://verses.quran.com/";

function App() {
  const [Reciters, setReciters] = useState([]);
  const [CurrentReciter, setCurrentReciter] = useState(7);
  const [openModal, setOpenModal] = useState(false);
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
    if (openModal) {
      document.body.style.overflow = "hidden";
      document.getElementsByClassName("audio-player")[0].style.fontSize = "0";
    } else {
      document.body.style.overflow = "auto";
      document.getElementsByClassName("audio-player")[0].style.fontSize =
        "30px";
    }
  }, [openModal]);
  useEffect(() => {
    fetch(`${baseUrl}resources/chapter_reciters?language=en`).then(
      (response) => {
        response.json().then((data) => setReciters(data.reciters));
      }
    );
  }, []);
  useEffect(() => {
    let reciationsUrls = [];
    let AyahsAudio = [];
    let textVerses = [];
    let AyahsText = [];
    setAyahIndex(0);
    Promise.all([
      fetch(`${baseUrl}quran/verses/uthmani?chapter_number=${chapterID}`).then(
        (response) => response.json()
      ),
      fetch(
        `${baseUrl}quran/recitations/${CurrentReciter}/?chapter_number=${chapterID}`
      ).then((response) => response.json()),
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
  }, [CurrentReciter, chapterID]);
  
  console.log(Reciters);
  return (
    <>
      <h1>FINISH CHOOSING RECITERS</h1>
      {openModal && (
        <Modal
          surahText={verses}
          showModal={openModal}
          setShowModal={setOpenModal}
        />
      )}
      <Navbar
        changeID={setChapterID}
        chapters={chapters}
        chapID={chapterID}
        reciters={Reciters}
        setReciter={setCurrentReciter}
      />
      <section className="surahs">
        {chapters.map((chapter, index) => {
          return (
            <Surah
              surahText={verses}
              key={index}
              {...chapter}
              changeID={setChapterID}
              showModal={openModal}
              setShowModal={setOpenModal}
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
