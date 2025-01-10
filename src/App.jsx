import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player name={"Player-1"} symbol={"X"}></Player>
          </li>
          <li>
            <Player name={"Player-2"} symbol={"O"}></Player>
          </li>
        </ol>
        <GameBoard></GameBoard>
      </div>
    </main>
  );
}

export default App;
