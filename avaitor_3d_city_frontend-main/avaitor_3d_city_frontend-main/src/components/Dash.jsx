import React, { useState } from "react";
import "./Deshboard_1.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import RangeInfo from "../components/RangeAuto2/RangeInfo";
import Main_button from "./buttonDesh/Main_button";

const Dash = (props) => {
  const [isNextBet, setIsNextBet] = useState(true);
  const [show, setShow] = useState(false);
  const [autoCash, setAutoCash] = useState(false);
  const [autoCashOne, setAutoCashOne] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleNextBetClick = () => {
    setIsNextBet(!isNextBet);
    setShow(!show);
  };

  const handleAutoBetToggle = (switchNumber) => {
    if (switchNumber === 1) {
      const newAutoCash = !autoCash;
      setAutoCash(newAutoCash);
      setPopupMessage(newAutoCash ? "Auto Bet 1 is on" : "Auto Bet 1 is off");
      showPopup();
    }

    if (switchNumber === 2) {
      const newAutoCashOne = !autoCashOne;
      setAutoCashOne(newAutoCashOne);
      setPopupMessage(
        newAutoCashOne ? "Auto Bet 2 is on" : "Auto Bet 2 is off"
      );
      showPopup();
    }
  };

  const showPopup = () => {
    const popup = document.getElementById("autoCashPopup");
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);
  };

  return (
    <div>
      <div className="brdiv">
        <div className="button-section">
          <Main_button />
        </div>

        <div className="mrl-button">
          <button
            className="btn-m"
            style={{ borderColor: "#22c55e", color: "#22c55e" }}
          >
            Max
          </button>
          <button
            className="btn-m"
            style={{ borderColor: "#f97316", color: "#f97316" }}
          >
            Reset
          </button>
          <div
            className="svg-logo"
            style={{ background: "#64748b", padding: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
              <path d="M13.5 6.5l4 4"></path>
            </svg>
          </div>
        </div>
        <div style={{ width: "100%", margin: "13px 0px", display: "flex" }}>
          <button
            className={`submit-button ${!isNextBet ? "cancel-button" : ""}`}
            type="button"
            onClick={handleNextBetClick}
          >
            <span>{isNextBet ? "Next Bet" : "Cancel Bet"}</span>
          </button>
        </div>
        {show && (
          <div
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "10px",
              background: "gray",
              borderRadius: "16px",
              marginBottom: "8px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Waiting For Next Round
          </div>
        )}
        <div className="doganbutton-main">
          <div className="doganbutton-slid" style={{ display: "flex" }}>
            <label className="switch">
              <input
                type="checkbox"
                checked={autoCash}
                onChange={() => handleAutoBetToggle(1)}
              />
              <span className="slider round"></span>
            </label>
            <p>Auto Bet 1</p>
          </div>
          <div
            className="doganbutton-slid"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <label className="switch">
              <input
                type="checkbox"
                checked={autoCashOne}
                onChange={() => handleAutoBetToggle(2)}
              />
              <span className="slider round"></span>
            </label>
            <p>Auto Bet 2</p>
          </div>
          {autoCashOne && <RangeInfo />}
        </div>
      </div>
      <div id="autoCashPopup" className="popup">
        {popupMessage}
      </div>
    </div>
  );
};

export default Dash;
