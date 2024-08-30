import React from "react";
// import "./luckyPlayer.css";
import "../table/luckyPlyer.css";
import { image } from "../../assets/image";

const LuckyPlayer = ({ data }) => {
  const players = [
    { user: "Wase***", bet: 4226.0, multiplier: null, win: null },
    { user: "Part***", bet: 1100.0, multiplier: null, win: null },
    { user: "b9ba***", bet: 251.0, multiplier: null, win: null },
    { user: "R678***", bet: 200.0, multiplier: "1.52x", win: 304.0 },
    { user: "Jack***", bet: 200.0, multiplier: "1.68x", win: 336.0 },
    { user: "YB9V***", bet: 121.0, multiplier: "2.09x", win: 252.89 },
    { user: "maha***", bet: 101.0, multiplier: "1.44x", win: 145.44 },
    { user: "Mant***", bet: 100.0, multiplier: "1.86x", win: 186.0 },
    { user: "YB9V***", bet: 100.0, multiplier: "1.18x", win: 118.0 },
    { user: "lt50***", bet: 100.0, multiplier: null, win: null },
    { user: "Wase***", bet: 4226.0, multiplier: null, win: null },
    { user: "Part***", bet: 1100.0, multiplier: null, win: null },
    { user: "b9ba***", bet: 251.0, multiplier: null, win: null },
    { user: "R678***", bet: 200.0, multiplier: "1.52x", win: 304.0 },
    { user: "Jack***", bet: 200.0, multiplier: "1.68x", win: 336.0 },
    { user: "YB9V***", bet: 121.0, multiplier: "2.09x", win: 252.89 },
    { user: "maha***", bet: 101.0, multiplier: "1.44x", win: 145.44 },
    { user: "Mant***", bet: 100.0, multiplier: "1.86x", win: 186.0 },
    { user: "YB9V***", bet: 100.0, multiplier: "1.18x", win: 118.0 },
    { user: "lt50***", bet: 100.0, multiplier: null, win: null },
  ];

  return (
    <>
      <div className="lp_Main">
        <div className="lp_main2">
          <div className="LP_Main3">
            <div className="lp-main4">
              <p>{image.groupPlayer}</p>
              <span className="lp_p">Lucky Players </span>
              <span className="lp_p" style={{ color: "green" }}>
                15
              </span>
            </div>
          </div>
        </div>
        {/* Start */}
        <div className="lucky-plyer-main">
          <div className="scrollable-content">
            <table>
              <thead style={{}}>
                <tr>
                  <th>USER</th>
                  <th>
                    BET <span className="bet-total">6722</span>
                  </th>
                  <th>X</th>
                  <th>WIN</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index}>
                    <td>{player.user}</td>
                    <td>{player.bet}</td>
                    <td
                      style={{ color: player.multiplier ? "green" : "inherit" }}
                    >
                      {player.multiplier || "--"}
                    </td>
                    <td style={{ color: player.win ? "green" : "inherit" }}>
                      {player.win !== null ? player.win.toFixed(2) : "--"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuckyPlayer;
