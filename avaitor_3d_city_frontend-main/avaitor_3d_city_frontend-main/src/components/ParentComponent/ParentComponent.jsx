// import React, { useState } from "react";
// import Dash from "../Dash";
// import LuckyPlayer from "../table/luckyPlayer";
// import "./parentComponents.css";
// import Deshboard_1 from "../Deshboard_1";

// const ParentComponent = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   return (
//     <div className="parent-container">
//       <div className="tab-header">
//         <button
//           className={`tab-button ${activeTab === "dashboard" ? "active" : ""}`}
//           onClick={() => setActiveTab("dashboard")}
//         >
//           <Deshboard_1 />
//         </button>
//         <button
//           className={`tab-button ${
//             activeTab === "luckyPlayers" ? "active" : ""
//           }`}
//           onClick={() => setActiveTab("luckyPlayers")}
//         >
//           <LuckyPlayer />
//         </button>
//       </div>
//       <div className="tab-content">
//         {activeTab === "dashboard" && <Dash />}
//         {activeTab === "luckyPlayers" && <LuckyPlayer />}
//       </div>
//     </div>
//   );
// };

// export default ParentComponent;
