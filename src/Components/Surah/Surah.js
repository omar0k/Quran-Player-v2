import React from "react";
import { useState, useEffect } from "react";
import "./Surah.css";

const baseUrl = "https://api.quran.com/api/v4/";
const audioUrl = "https://verses.quran.com/";
let Ayahaudios = [];
const Surah = ({
  name_simple,
  name_arabic,
  id,
  verses_count,
  stateVerses,
  stateRecitations,
  ayahState,
}) => {
  let ayahIndex = ayahState[0];
  let setAyahIndex = ayahState[1];
  let reciationsUrls = [];
  let AyahsAudio = [];
  let textVerses = [];
  let AyahsText = [];
  return (
    <article
      className="surah"
      onClick={() => {
        setAyahIndex(0);
        Promise.all([
          fetch(`${baseUrl}/quran/verses/uthmani?chapter_number=${id}}`).then(
            (response) => response.json()
          ),
          fetch(`${baseUrl}/quran/recitations/3/?chapter_number=${id}`).then(
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
          stateVerses[1](AyahsText);
          stateRecitations[1](AyahsAudio);
        });
      }}
    >
      <p>{name_arabic}</p>
      <p>{name_simple}</p>
    </article>
  );
};
export default Surah;
