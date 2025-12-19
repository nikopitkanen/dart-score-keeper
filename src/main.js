import * as game from "./modules/game.js";
import * as ui from "./modules/ui.js";

//setup form
const startGameBtn = document.getElementById("start-game");
const submitTurnBtn = document.getElementById("submit-turn");
const undoTurnBtn = document.getElementById("undo-turn");
const newLegBtn = document.getElementById("new-leg");
const resetGameBtn = document.getElementById("reset-game")

function handleNewGame() {
  const formElement = document.getElementById("setup-form");
  const data = new FormData(formElement);
  const gameType = data.get("gameType");
  const legs = data.get("legs");

  const names = data.getAll("player")
    .map(name => name.trim())

  game.newGame(names, gameType, legs);
  ui.scoreBoard();
}

document.getElementById("setup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  handleNewGame();
});
submitTurnBtn.addEventListener("click", handleTurn);

function handleTurn() {
  game.turn;
}

submitTurnBtn.addEventListener("click", () => {
	const points = parseInt(document.getElementById("turn-score").value, 10);

	if (isNaN(points)) {
	  alert("insert valid number")
	}

	if (points > 180 || points <= 0) {
	  alert("3 dart score can be only between 0 to 180")
    return;
	}
	game.throwDart(points); // update game state
	ui.scoreBoard(); // refresh scoreboard
	ui.currentPlayer; // update current player display
});

undoTurnBtn.addEventListener("click", () => {
	game.undoLastTurn();
	ui.scoreBoard();
	ui.currentPlayer;
});

newLegBtn.addEventListener("click", () => {
	game.startNewLeg();
	ui.scoreBoard();
	ui.currentPlayer;
});

resetGameBtn.addEventListener("click", () => {
	location.reload(); // simplest reset: reloads the page
});
