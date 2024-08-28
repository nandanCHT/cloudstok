import React, { useState } from "react";
import "./Main_button.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../Deshboard_1.css";

const Main_button = () => {
  const [value, setValue] = useState(100);
  const buttonValues = [100, 500, 1000, 2000];

  const handleMinusClick = () => {
    setValue((prevValue) => Math.max(100, prevValue - 50)); // Ensures the value doesn't go below 100
  };

  const handlePlusClick = () => {
    setValue((prevValue) => prevValue + 50);
  };

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue)) {
      // Allows only numeric values
      setValue(Number(newValue));
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
          className="value-input"
        />
        <button onClick={handlePlusClick} className="plus-button">
          <FaPlus />
        </button>
      </div>
      {/* Uncomment this section if you want to use the other buttons */}
      <div className="other-bt">
        <div className="btn">
          {buttonValues.map((value) => (
            <button
              className="button-fp"
              key={value}
              onClick={() => handleButtonClick(value)}
            >
              <span className="text-base">
                <FaPlus />
              </span>
              <span className="text-base1"> {value}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main_button;
