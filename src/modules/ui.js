import { state } from "./game.js";

export function scoreBoard() {
  const currentPlayer = document.getElementById("current-player-name");
  if (state.currentPlayerIndex === 0) {
    currentPlayer.textContent = state.players[0].name;
  } else {
    currentPlayer.textContent = state.players[1].name;
  }
}
