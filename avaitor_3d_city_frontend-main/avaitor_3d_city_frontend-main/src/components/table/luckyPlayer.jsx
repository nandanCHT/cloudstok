import React from "react";
import "./luckyPlyer.css";
import { image } from "../../assets/image";

const LuckyPlayer = ({ data }) => {
  return (
    <div className="lucky-plyer-main">
      <div className="lucky-plyerUpper">
        <div className="player-svg">
          <p>{image.player}</p>
        </div>
        <div>
          <p>luckyPlayer</p>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>User</th>
            <th>BET</th>
            <th>X</th>
            <th>WIN</th>
          </tr>
          <div className="scrollable-main">
            <div className="scrollable-content">
              {data?.map((itme, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{itme?.Company}</td>
                      <td>{itme?.Contact}</td>
                      <td>{itme?.Country}</td>
                    </tr>
                  </>
                );
              })}
            </div>
          </div>
        </table>
      </div>
    </div>
  );
};

export default LuckyPlayer;
