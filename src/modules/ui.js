import { state } from "./game.js";

export function scoreBoard() {
    // update current player name
    const currentPlayerLabel = document.getElementById("current-player-name");
    
    // Check if games over to stop UI updates
    if (state.isGameOver) {
        currentPlayerLabel.textContent = "GAME OVER";
        currentPlayerLabel.style.color = "var(--danger)"; // Uses CSS variable
    } else {
        currentPlayerLabel.textContent = state.players[state.currentPlayerIndex].name;
        currentPlayerLabel.style.color = "var(--primary)";
    }

    // update scoreboard
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = state.players
        .map(
            (p, i) =>
                `<div class="player-card ${i === state.currentPlayerIndex ? 'active' : ''}">
                    <p class="p-name">${p.name}</p>
                    <p class="p-score">${p.score}</p>
                    <p class="p-legs">Legs: ${p.legsWon}</p>
                 </div>`
        )
        .join("");
        
    // toggle inputs based on game over
    const inputField = document.getElementById("turn-score");
    const enterBtn = document.getElementById("enter-btn");
    
    // game is over, disable the key input
    if (state.isGameOver) {
        // visually dimming it 
        inputField.style.opacity = "0.5";
    } else {
        inputField.style.opacity = "1";
    }
}