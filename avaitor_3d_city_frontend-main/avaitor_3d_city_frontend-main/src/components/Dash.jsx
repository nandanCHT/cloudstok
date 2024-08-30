import React, { useState } from "react";
import "./Deshboard_1.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import RangeInfo from "../components/RangeAuto2/RangeInfo";
import Main_button from "./buttonDesh/Main_button";
import { image } from "../assets/image";
import MaxReset from "./MaxResetEdit/MaxReset";

const Dash = (props) => {
  const [isNextBet, setIsNextBet] = useState(true);
  const [show, setShow] = useState(false);
  const [autoCash, setAutoCash] = useState(false);
  const [autoCashOne, setAutoCashOne] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [betValue, setBetValue] = useState(0); // State to track the bet value

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

  const handleMax = () => {
    setBetValue(34567); // Set bet value to the maximum, assuming 100 is the max value
  };

  const handleReset = () => {
    setBetValue(100); // Reset bet value to 0
  };

  return (
    <div>
      <div className="brdiv">
        <div className="button-section">
          <Main_button betValue={betValue} />
          {/* Pass betValue to Main_button */}
        </div>
        {/* MaxRest */}
        <MaxReset onMax={handleMax} onReset={handleReset} />

        <div style={{ width: "100%", margin: "4px 0px", display: "flex" }}>
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
                className="Desh_Input"
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
