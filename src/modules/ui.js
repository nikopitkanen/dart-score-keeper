import { state } from "./game.js";

export function scoreBoard() {
    // update player name
    const currentPlayerLabel = document.getElementById("current-player-name");
    
    // Check if game is over 
    if (state.isGameOver) {
        currentPlayerLabel.textContent = "GAME OVER";
        currentPlayerLabel.style.color = "red";
    } else {
        currentPlayerLabel.textContent = state.players[state.currentPlayerIndex].name;
        currentPlayerLabel.style.color = "#c77414"; // Reset color
    }

    // 2. update score list
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
        
    // toggle inputs on game state
    const inputField = document.getElementById("turn-score");
    const submitBtn = document.getElementById("submit-turn");
    
    if (state.isGameOver) {
        inputField.disabled = true;
        submitBtn.disabled = true;
    } else {
        inputField.disabled = false;
        submitBtn.disabled = false;
        // auto focus input
        inputField.focus(); 
    }
}