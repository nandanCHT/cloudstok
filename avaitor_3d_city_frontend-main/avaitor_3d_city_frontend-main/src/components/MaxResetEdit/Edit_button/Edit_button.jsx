import React, { useState } from "react";
import "../MaxReset";
import "./edit_button.css";
import Main_button from "../../buttonDesh/Main_button";
import { image } from "../../../assets/image";

const EditButton = ({ isEditing, onEditClick, onSaveClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSaveClick(inputValue);
    }
  };

  const handleSaveClick = () => {
    onSaveClick(inputValue);
  };

  return (
    <div className="edit_Main">
      {!isEditing ? (
        <button
          className="btn-m fontEdit"
          style={{
            backgroundColor: "#64748b",
            color: "#f97316",
            fontSize: "1rem",
            fontWeight: "500",
          }}
          onClick={onEditClick}
        >
          {image.edit_button}
        </button>
      ) : (
        <div className="edit_inputtag">
          <div className="input-wrapper">
            <span className="input-icon">{image.coin}</span>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="edit-input font"
              style={{}}
            />
          </div>

          <button
            onClick={handleSaveClick}
            className="save-button"
            style={{
              backgroundColor: "#22c55e",
              // display: "flex",
              // justifyContent: "center",
              // alignContent: "center",
            }}
          >
            <span>{image.saveLogo}</span>
            <span>Save</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default EditButton;
