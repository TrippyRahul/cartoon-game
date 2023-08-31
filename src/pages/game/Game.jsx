import React, { useEffect } from "react";
import "./game.scss";
import { Unity, useUnityContext } from "react-unity-webgl";
import Explore from "../../components/explore/Explore";

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/games/buildUnity/Game1.loader.js",
    dataUrl: "/games/buildUnity/Game1.data.unityweb",
    frameworkUrl: "/games/buildUnity/Game1.framework.js.unityweb",
    codeUrl: "/games/buildUnity/Game1.wasm.unityweb",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="game">
        <div className="game-container">
          <Unity unityProvider={unityProvider} />
        </div>
        <div className="game-desc">
          <div className="titles">
            <h2>Slot Game</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio consectetur doloribus, eaque maiores nulla doloremque
              quis illum eveniet quo atque? Fugiat hic quo, eveniet adipisci
              nihil odit placeat soluta illum iste, eaque ducimus quis, culpa
              dicta quam ut atque optio ipsam accusantium neque corporis? Atque
              inventore sunt et cum eos.
            </p>
          </div>

          <div className="details">
            <table className="rating">
              <tr>
                <td>Rating : </td>
                <td>9.7 (500 votes)</td>
              </tr>
              <tr>
                <td>Company : </td>
                <td>Underpin Solutions pvt. ltd.</td>
              </tr>
              <tr>
                <td>Released : </td>
                <td>September 2023</td>
              </tr>
              <tr>
                <td>Last Update : </td>
                <td>September 2023</td>
              </tr>
              <tr>
                <td>Technology : </td>
                <td>Three.js</td>
              </tr>
              <tr>
                <td>Platform : </td>
                <td>Browser (desktop, mobile, tablet)</td>
              </tr>
            </table>
            <div className="features">
              <h3>Features</h3>
              <ul>
                <li>Chances to win real cash vouchers</li>
                <li>Multiplayer Game, easliy played</li>
                <li>100 Coins free </li>
                <li>
                  Earn gold from your achievements and spend it in the store
                </li>
              </ul>
            </div>
            <button>Add to Chrome</button>
          </div>
        </div>
      </div>
      <Explore />
    </>
  );
};

export default Game;
