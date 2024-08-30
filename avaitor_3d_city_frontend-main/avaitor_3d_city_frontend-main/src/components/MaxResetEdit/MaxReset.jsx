import React from "react";
import "./MaxRest.css";
import "../Deshboard_1.css";
import "../Dash";
import "../Deshboard_1";
import "../buttonDesh/Main_button";
import { image } from "../../assets/image";

const MaxReset = ({ onMax, onReset }) => {
  return (
    <div className="mrl-button">
      <button
        className="btn-m"
        style={{
          borderColor: "#22c55e",
          color: "#22c55e",
          fontSize: "1rem",
          fontWeight: "1rem",
        }}
        onClick={onMax}
      >
        Max
      </button>
      <button
        className="btn-m"
        style={{
          borderColor: "#f97316",
          color: "#f97316",
          fontSize: "1rem",
          fontWeight: "1rem",
        }}
        onClick={onReset}
      >
        Reset
      </button>
      <div className="btn-m fontEdit">
        <p>{image.edit_button}</p>
      </div>
    </div>
  );
};

export default MaxReset;
