import * as game from "./modules/game.js";
import * as ui from "./modules/ui.js";

//setup form
const p1Input = document.getElementById("player-1");
const p2Input = document.getElementById("player-2");
const gameTypeSelect = document.getElementById("game-type");
//const legsSelect = document.getElementById("set-size");
const startGameBtn = document.getElementById("start-game");
startGameBtn.addEventListener("click", handleNewGame);

function handleNewGame() {
  const gameType = gameTypeSelect.value;
  const p1 = p1Input.value;
  const p2 = p2Input.value;

  game.newGame(p1, p2, gameType);
  ui.scoreBoard();
  console.log(game.state);
}

const submitTurnBtn = document.getElementById("submit-turn");
submitTurnBtn.addEventListener("click", () => {
  const points = parseInt(document.getElementById("turn-score").value, 10);
  game.throwDart(points);   // update game state
  ui.scoreBoard();          // refresh scoreboard
  ui.currentPlayer();       // update current player display
});

const undoTurnBtn = document.getElementById("undo-turn");
undoTurnBtn.addEventListener("click", () => {
  game.undoLastTurn();      
  ui.scoreBoard();
  ui.currentPlayer();
});

const newLegBtn = document.getElementById("new-leg");
newLegBtn.addEventListener("click", () => {
  game.startNewLeg();
  ui.scoreBoard();
  ui.currentPlayer();
});

const resetGameBtn = document.getElementById("reset-game");
resetGameBtn.addEventListener("click", () => {
  location.reload(); // simplest reset: reloads the page
});