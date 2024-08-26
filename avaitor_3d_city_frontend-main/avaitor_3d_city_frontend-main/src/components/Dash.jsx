import React, { useState } from "react";
import "./Deshboard_1.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dash = () => {
  const [isNextBet, setIsNextBet] = useState(true);
  const [show, setShow] = useState(false);
  const [isAutoBet1, setIsAutoBet1] = useState(false);
  const [isAutoBet2, setIsAutoBet2] = useState(false);
  const [activeSwitch, setActiveSwitch] = useState(null);

  const handleNextBetClick = () => {
    setIsNextBet(!isNextBet);
    setShow(!show);
  };

  const handleAutoBetToggle = (switchNumber) => {
    if (activeSwitch === switchNumber) {
      setActiveSwitch(null);
      toast.info(`Auto Bet ${switchNumber} is OFF`, {
        position: "top-center",
        autoClose: 100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: false,
        closeButton: false,
        style: { backgroundColor: "yellow", color: "black" },
      });
    } else {
      setActiveSwitch(switchNumber);
      toast.info(`Auto Bet ${switchNumber} is ON!`, {
        position: "top-center",
        autoClose: 100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: false,
        closeButton: false,
        style: { backgroundColor: "green", color: "black" },
      });
    }
  };

  return (
    <div>
      <div className="brdiv">
        <div className="button-section">
          <div className="bt">
            <p>
              <FaMinus />
            </p>
            <p>100</p>
            <p>
              <FaPlus />
            </p>
          </div>
        </div>
        <div className="other-bt">
          <div className="btn">
            <button className="button-fp">
              <span className="text-base">
                <FaPlus />
              </span>
              <span className="text-base1"> 100</span>
            </button>

            <button className="button-fp">
              <span className="text-base">
                <FaPlus />
              </span>
              <span className="text-base1"> 500</span>
            </button>

            <button className="button-fp">
              <span className="text-base">
                <FaPlus />
              </span>
              <span className="text-base1"> 1000</span>
            </button>

            <button className="button-fp">
              <span className="text-base">
                <FaPlus />
              </span>

              <span className="text-base1"> 2000</span>
            </button>
          </div>
        </div>
        {/* max reset and logo button */}
        <div className="mrl-button">
          <button
            className="btn-m"
            style={{
              borderColor: "#22c55e",
              color: "#22c55e",
            }}
          >
            Max
          </button>
          <button
            className="btn-m"
            style={{
              borderColor: "#f97316",
              color: "#f97316",
            }}
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
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
              <path d="M13.5 6.5l4 4"></path>
            </svg>
          </div>
        </div>
        {/* submit button  */}
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
        {/* Conditionally render "hii" div */}
        {/* toggle file*/}
        <div className="doganbutton-main">
          <div className="doganbutton-slid" style={{ display: "flex" }}>
            <label className="switch">
              <input
                type="checkbox"
                checked={activeSwitch === 1}
                onChange={() => handleAutoBetToggle(1)}
              />
              <span className="slider round"></span>
            </label>
            <p>Auto Bet 1</p>
          </div>
          {/* au */}
          <div
            className="doganbutton-slid"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <label className="switch">
              <input
                type="checkbox"
                checked={activeSwitch === 2}
                onChange={() => handleAutoBetToggle(2)}
              />
              <span className="slider round"></span>
            </label>
            <p>Auto Bet 2</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dash;
