import React from "react";
// import "../components/Deshboard_1.css"; // Make sure this path is correct
import { image } from "../assets/image"; // Adjust the import based on your image path

import Dash from "./Dash";

const Deshboard_1 = () => {
  return (
    <div className="M-full">
      <div className="deshboard-upr">
        <div className="deshboard-upr2">
          <div className="deshboard-rocket">
            <p>{image.rocket}</p>
            {/* Assuming this renders the rocket image/icon */}
            <p className="deshboard-p">Dashboard</p>
          </div>
        </div>
      </div>
      <span className="num">#4567567</span>

      <div className="w-full">
        {/* flexdiv */}
        <div className="dash-section">
          <div>
            <Dash />
          </div>
          <div>
            <Dash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshboard_1;
