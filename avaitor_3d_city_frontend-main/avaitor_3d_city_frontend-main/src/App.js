import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Deshboard_1 from "./components/Deshboard_1";

const App = () => {
  const { unityProvider, loadingProgression, sendMessage } = useUnityContext({
    loaderUrl: "/assets/Aviator3DCity.loader.js",
    dataUrl: "/assets/Aviator3DCity.data",
    frameworkUrl: "/assets/Aviator3DCity.framework.js",
    codeUrl: "/assets/Aviator3DCity.wasm",
  });
  return (
    <div className="flex-container">
      <div className="game-section">
        <div className="game">
          <Unity
            unityProvider={unityProvider}
            className="canvas-game"
            tabIndex={-1}
          />
        </div>
        <div className="deshboard-section">
          <Deshboard_1 />
        </div>
      </div>
    </div>
  );
};

export default App;
