import gameLogo from "./assets/game-logo.png"; // import the image
import Player from "./components/player";
import GameBoard from "./components/GameBoard";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <img src={gameLogo} alt="Hand Drawn Image" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <memu>
        <div id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          <GameBoard/>
        </div>
      </memu>
    </>
  );
}

export default App;
