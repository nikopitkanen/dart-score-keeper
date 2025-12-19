import * as game from "./modules/game.js";
import * as ui from "./modules/ui.js";

//setup form
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

const playerWrapper = document.getElementById("player-wrapper")
const addPlayerBtn = document.getElementById("add-player")

addPlayerBtn.addEventListener("click", () => {
  const counter = playerWrapper.querySelectorAll(".player-input-group").length;
  const playerNumber = counter + 1;
  const id = `player-id-${playerNumber}`

  const div = document.createElement("div");
  div.className = "player-input-group";

  div.innerHTML = `
    <label for="${id}"></label>
    <input
        id="${id}"
        type="text"
        name="player"
        required pattern="\w+"
        minlength="3"
        maxlength="20"
        title="Player name must have following"
        placeholder="player ${playerNumber} name">
        <button class="del-player"><span class="iconoir-minus"></span> </button>
    `;

  playerWrapper.appendChild(div);

});

playerWrapper.addEventListener("click", (e) => {
  const delBtn = e.target.closest(".del-player");

  if (delBtn) {
    delBtn.parentElement.remove();
  }
})
