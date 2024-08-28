import React, { useState } from "react";
import "./Main_button.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../Deshboard_1.css";

const Main_button = () => {
  const [value, setValue] = useState(100); // Initial value of the input
  const buttonValues = [100, 500, 1000, 2000]; // Values of the buttons

  const handleMinusClick = () => {
    setValue((prevValue) => Math.max(100, prevValue - 50)); // Decrease value by 50 but not below 100
  };

  const handlePlusClick = () => {
    setValue((prevValue) => prevValue + 50); // Increase value by 50
  };

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue); // Add button value to the current input value
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue)) {
      setValue(Number(newValue)); // Update input value only if the input is a valid number
    }
  };

  const handleInputFocus = (event) => {
    event.target.select(); // Select all text in the input when focused
  };

  const handleInputKeyDown = (event) => {
    if (event.key === " ") {
      setValue(""); // Clear the input value when the Space key is pressed
    }
  };

  return (
    <div className="button-section">
      <div className="bt">
        <button onClick={handleMinusClick} className="minus-button">
          <FaMinus />
        </button>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleInputKeyDown}
          className="value-input"
        />
        <button onClick={handlePlusClick} className="plus-button">
          <FaPlus />
        </button>
      </div>
      <div className="other-bt">
        <div className="btn">
          {buttonValues.map((buttonValue) => (
            <button
              className="button-fp"
              key={buttonValue}
              onClick={() => handleButtonClick(buttonValue)}
            >
              <span className="text-base">
                <FaPlus />
              </span>
              <span className="text-base1"> {buttonValue}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main_button;
