import React from "react";
import "./Deshboard_1.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
const Dash = () => {
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
              <span class="text-base">
                <FaPlus />
              </span>
              <span class="text-base1"> 100</span>
            </button>

            <button className="button-fp">
              <span class="text-base">
                <FaPlus />
              </span>
              <span class="text-base1"> 500</span>
            </button>

            <button className="button-fp">
              <span class="text-base">
                <FaPlus />
              </span>
              <span class="text-base1"> 1000</span>
            </button>

            <button className="button-fp">
              <span class="text-base">
                <FaPlus />
              </span>

              <span class="text-base1"> 2000</span>
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
        <div
          style={{
            width: "100%",
            margin: "13px 0px 13px 0px",
            display: "flex",
          }}
        >
          <button className="submit-button" type="button">
            <span> Next Bet </span>
          </button>
        </div>

        {/* doganbutton */}
        <div className="doganbutton-main">
          <div className="doganbutton-slid" style={{ display: "flex" }}>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <p>Auto Bet</p>
          </div>
          <div
            className="doganbutton-slid"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <p>Auto Bet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
