import * as game from "./modules/game.js";
import * as ui from "./modules/ui.js";

//setup form
const p1Input = document.getElementById("player-1");
const p2Input = document.getElementById("player-2");
const gameTypeSelect = document.getElementById("game-type");
const legsSelect = document.getElementById("set-size");
const startGameBtn = document.getElementById("start-game");
const submitTurnBtn = document.getElementById("submit-turn");

function handleNewGame() {
  const gameType = gameTypeSelect.value;
  const legs = legsSelect.value;
  const p1 = p1Input.value;
  const p2 = p2Input.value;

  game.newGame(p1, p2, gameType, legs);
  ui.scoreBoard();
  console.table(game.state);
}

startGameBtn.addEventListener("click", handleNewGame);
submitTurnBtn.addEventListener("click", handleTurn);

function handleTurn() {
  game.turn;
}

submitTurnBtn.addEventListener("click", () => {
	const points = parseInt(document.getElementById("turn-score").value, 10);
	game.throwDart(points); // update game state
	ui.scoreBoard(); // refresh scoreboard
	ui.currentPlayer(); // update current player display
});

undoTurnBtn.addEventListener("click", () => {
	game.undoLastTurn();
	ui.scoreBoard();
	ui.currentPlayer();
});

newLegBtn.addEventListener("click", () => {
	game.startNewLeg();
	ui.scoreBoard();
	ui.currentPlayer();
});

resetGameBtn.addEventListener("click", () => {
	location.reload(); // simplest reset: reloads the page
});
