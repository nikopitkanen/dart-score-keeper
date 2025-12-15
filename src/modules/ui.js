import { state } from "./game.js";

export function scoreBoard() {
  // Update current player name
  const currentPlayer = document.getElementById("current-player-name");
  currentPlayer.textContent = state.players[state.currentPlayerIndex].name;

  // Update scoreboard
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = state.players
    .map(
      (p, i) =>
        `<p>${p.name} — Score: ${p.score} | Legs Won: ${p.legsWon}${
          i === state.currentPlayerIndex ? " ← Current" : ""
        }</p>`
    )
    .join("");
}
