import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.css";
import React, { useRef } from "react";
const Player = ({ reciationsURLS, ayahState, ayahText }) => {
  let AyahIndex = ayahState[0];
  let setAyahIndex = ayahState[1];
  let ayahVerse = ayahText[0];
  const handleEnd = () => {
    AyahIndex + 1 < reciationsURLS.length
      ? setAyahIndex((AyahIndex) => AyahIndex + 1)
      : setAyahIndex(0);
  };
  const incrementAyahIndex = () => {
    AyahIndex + 1 < reciationsURLS.length
      ? setAyahIndex(AyahIndex + 1)
      : setAyahIndex(0);
  };
  const decrementAyahIndex = () => {
    if (AyahIndex - 1 >= 0) {
      setAyahIndex(AyahIndex - 1);
    }
  };
  const player = useRef();
  // const audioFunction = () => {
  //   player.current.audio.current.play();
  // };
  return (
    <>
      <AudioPlayer
        ref={player}
        header={ayahVerse[AyahIndex]}
        className="audio-player"
        customAdditionalControls={[]}
        onEnded={handleEnd}
        showSkipControls
        showJumpControls
        onClickPrevious={decrementAyahIndex}
        onClickNext={incrementAyahIndex}
        autoPlay
        src={reciationsURLS[AyahIndex]}
      />
    </>
  );
};

export default Player;
