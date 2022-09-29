import React from "react";
import SurahText from "../SurahText/SurahText";
import { AiOutlineClose } from "react-icons/ai";

import "./Modal.css";

function Modal({ surahText, showModal, setShowModal }) {
  return (
    <div className="modal-background" onClick={() => setShowModal(false)}>
      <div className="modal-container">
        <button id="read-btn-active" onClick={() => setShowModal(!showModal)}>
          <AiOutlineClose />
        </button>
        <SurahText
          ayahText={surahText}
          setOpenModal={setShowModal}
          openModal={showModal}
        />
      </div>
    </div>
  );
}

export default Modal;
