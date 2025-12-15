import * as game from "./modules/game.js";
import * as ui from "./modules/ui.js";

//setup form
const p1Input = document.getElementById("player-1");
const p2Input = document.getElementById("player-2");
const gameTypeSelect = document.getElementById("game-type");
const legsSelect = document.getElementById("set-size");
const startGameBtn = document.getElementById("start-game");
const submitTurnBtn = document.getElementById("submit-turn");
const undoTurnBtn = document.getElementById("undo-turn");
const newLegBtn = document.getElementById("new-leg");
const resetGameBtn = document.getElementById("reset-game")

function handleNewGame() {
  const gameType = gameTypeSelect.value;
  const legs = legsSelect.value;
  const p1 = p1Input.value;
  const p2 = p2Input.value;

  game.newGame(p1, p2, gameType, legs);
  ui.scoreBoard();
}

startGameBtn.addEventListener("click", handleNewGame);
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

// TODO: Remove new leg or refactor as in current state it is pointless.
// FIXME: Winning game doesn't display anything, it just stops.
// FIXME: Player name can be empty.This should not happen.
// FIXME: 180 for round max score
