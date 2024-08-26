import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Deshboard_1 from "./components/Deshboard_1";
import LuckyPlayer from "./components/table/luckyPlayer";
import GameRule from "./components/gameRules/gameRule";

const App = () => {
  const { unityProvider, loadingProgression, sendMessage } = useUnityContext({
    loaderUrl: "/assets/Aviator3DCity.loader.js",
    dataUrl: "/assets/Aviator3DCity.data",
    frameworkUrl: "/assets/Aviator3DCity.framework.js",
    codeUrl: "/assets/Aviator3DCity.wasm",
  });

  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // dummy data
  const data = [
    {
      Company: "nandan",
      Contact: "74673637",
      Country: "india",
    },
    {
      Company: "nandan",
      Contact: "74673637",
      Country: "india",
    },
    {
      Company: "nandan",
      Contact: "74673637",
      Country: "india",
    },
    {
      Company: "nandan",
      Contact: "74673637",
      Country: "india",
    },
    {
      Company: "nandan",
      Contact: "74673637",
      Country: "india",
    },
  ];

  return (
    <div className="flex-container">
      <div className="game-section">
        <div className="game">
          <Unity
            unityProvider={unityProvider}
            className="canvas-game"
            tabIndex={-1}
          />
          <div className="game-Rule">
            <GameRule />
          </div>
        </div>
        <div className="deshboard-section">
          {/* Tab Navigation for Mobile/Tablet */}
          <div className="tab-container">
            <div
              className={`tab ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => handleTabChange("dashboard")}
            >
              Dashboard
            </div>
            <div
              className={`tab ${activeTab === "luckyPlayer" ? "active" : ""}`}
              onClick={() => handleTabChange("luckyPlayer")}
            >
              Lucky Player
            </div>
          </div>
          {/* Tab Content */}
          <div
            className={`tab-content ${
              activeTab === "dashboard" ? "active" : ""
            }`}
          >
            <Deshboard_1 />
          </div>
          <div
            className={`tab-content ${
              activeTab === "luckyPlayer" ? "active" : ""
            }`}
          >
            <LuckyPlayer data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
