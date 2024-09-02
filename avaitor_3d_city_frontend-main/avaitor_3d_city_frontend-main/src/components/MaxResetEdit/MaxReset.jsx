import React, { useState } from "react";
import "./MaxRest.css";
import "../Deshboard_1.css";
import "../Dash";
import "../Deshboard_1";
import "../buttonDesh/Main_button";
import Main_button from "../buttonDesh/Main_button";
import EditButton from "./Edit_button/Edit_button";

const MaxReset = ({ Dash, onMax, onReset }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle save button click
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="MaxResetEdit">
      {!isEditing && (
        <>
          <button
            className="MaxResetEdit"
            style={{
              borderColor: "#22c55e",
              color: "#22c55e",
              fontSize: "1rem",
              fontWeight: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={onMax}
          >
            <span>Max</span>
          </button>
          <button
            className="MaxResetEdit"
            style={{
              borderColor: "#f97316",
              color: "#f97316",
              fontSize: "1rem",
              fontWeight: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={onReset}
          >
            <span>Reset</span>
          </button>
        </>
      )}
      <div>
        <EditButton
          isEditing={isEditing}
          onEditClick={handleEditClick}
          onSaveClick={handleSaveClick}
        />
      </div>
    </div>
  );
};

export default MaxReset;
