import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import Player from "./Components/Player/Player";
import Navbar from "./Components/Navbar/Navbar";
import ChaptersList from "./Components/ChaptersList";
import axios from "axios";
const baseUrl = "https://api.quran.com/api/v4/";
const audioUrl = "https://verses.quran.com/";

function App() {
  const [reciters, setReciters] = useState([]);
  const [currentReciter, setCurrentReciter] = useState(7);
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
    axios.get(`${baseUrl}resources/recitations`).then((response) => {
      setReciters(response.data.recitations);
    });
  }, []);

  console.log(reciters);
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
        `${baseUrl}quran/recitations/${currentReciter}/?chapter_number=${chapterID}`
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
  }, [currentReciter, chapterID]);
  console.log(reciters);
  return (
    <div className=" bg-darkGray w-full flex flex-col items-center">
      {openModal && (
        <Modal
          surahText={verses}
          showModal={openModal}
          setShowModal={setOpenModal}
        />
      )}
      <Navbar
        currentReciter={currentReciter}
        reciters={reciters}
        setReciter={setCurrentReciter}
      />
      <ChaptersList
        chapters={chapters}
        verses={verses}
        setChapterID={setChapterID}
        openModal={openModal}
        setShowModal={setOpenModal}
      />
      <footer>
        <Player
          reciationsURLS={recitations}
          ayahState={[AyahIndex, setAyahIndex]}
          ayahText={[verses, setVerses]}
        />
      </footer>
    </div>
  );
}
export default App;
