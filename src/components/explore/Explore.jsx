import React from "react";
import "./explore.scss";
import { SiSocketdotio } from "react-icons/si";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const data = [
  { id: 1, name: "game 1", img: "/ex-1.png" },
  { id: 2, name: "game 2", img: "/ex-2.png" },
  { id: 3, name: "game 3", img: "/ex-3.png" },
  { id: 4, name: "game 4", img: "/ex-4.png" },
];

const Explore = () => {
  const navigate = useNavigate();

  const handleNavigate = (gameId) => {
    navigate(`/game/${gameId}`);
  };
  return (
    <div className="explore">
      <div className="explore-container">
        <div className="top">
          <ul>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
            <li>
              <span>play now</span>
              <SiSocketdotio className="icon" />
            </li>
          </ul>
        </div>
        <div className="bottom">
          <h2>
            Explore bauen <br /> universe
          </h2>
          <div className="bottom-content">
            <div className="cards">
              {data.map((card, index) => (
                <div
                  className="card"
                  key={card.id}
                  style={{ backgroundImage: `url(${card.img})` }}
                  onClick={() => handleNavigate(card.name)}
                >
                  <div className="content">
                    <div className="title">
                      <AiFillPlayCircle className="icon" />
                      <p>Build Something Amazing</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
