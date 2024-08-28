import React from "react";
// import "../components/Deshboard_1.css";
import { image } from "../assets/image";

import Dash from "./Dash";

const Deshboard_1 = () => {
  return (
    <div className="w-full">
      <div className="deshboard-upr">
        <div className="deshboard-rocket">
          <p>{image.rocket}</p>
          <p className="deshboard-p">Dashboard </p>
        </div>
        <div className="num">
          <p>#567890</p>
        </div>
      </div>

      {/* flexdiv */}
      <div className="dash-section">
        <div>
          <Dash />
        </div>
        dlkfjflkjfkljdlkfjdlkf
        <div>
          <Dash />
        </div>
      </div>
    </div>
  );
};

export default Deshboard_1;
