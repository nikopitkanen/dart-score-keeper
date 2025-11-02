// To achieve modularity project uses MVC model: main.js = controller, game.js = model, ui.js = view.
// controllers task is to connect model and view.
// model handles all the logic.
// view handles all the updates of the ui.
import * as game from "./modules/game.js";

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
  console.log(game.state);
}
