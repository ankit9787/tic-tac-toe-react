import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleTurn() {
    setActivePlayer((activeP) => (activeP === "X" ? "O" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <li>
            <Player
              name={"Player-1"}
              symbol={"X"}
              isActive={activePlayer === "X"}
            ></Player>
          </li>
          <li>
            <Player
              name={"Player-2"}
              symbol={"O"}
              isActive={activePlayer === "O"}
            ></Player>
          </li>
        </ol>
        <GameBoard
          onSelectBox={handleTurn}
          activePlayerSymbol={activePlayer}
        ></GameBoard>
        <Log></Log>
      </div>
    </main>
  );
}

export default App;
