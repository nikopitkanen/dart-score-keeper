import * as game from "./modules/game.js";
import * as ui from "./modules/ui.js";

// --- DOM Elements ---
const p1Input = document.getElementById("player-1");
const p2Input = document.getElementById("player-2");
const gameTypeSelect = document.getElementById("game-type");
const legsSelect = document.getElementById("set-size");
const startGameBtn = document.getElementById("start-game");
const undoTurnBtn = document.getElementById("undo-turn");
const newLegBtn = document.getElementById("new-leg");
const resetGameBtn = document.getElementById("reset-game");

// Keypad Specific Elements
const keypad = document.getElementById("keypad");
const turnInput = document.getElementById("turn-score");
const clearBtn = document.getElementById("clear-btn");
const enterBtn = document.getElementById("enter-btn");


// --- Event Handlers ---

function handleNewGame() {
    const p1 = p1Input.value.trim();
    const p2 = p2Input.value.trim();

    if (!p1 || !p2) {
        alert("Please enter names for both players.");
        return;
    }

    const gameType = gameTypeSelect.value;
    const legs = legsSelect.value;

    game.newGame(p1, p2, gameType, legs);
    ui.scoreBoard();
}


// --- Event Listeners ---

startGameBtn.addEventListener("click", handleNewGame);

undoTurnBtn.addEventListener("click", () => {
    game.undoLastTurn();
    ui.scoreBoard();
});

resetGameBtn.addEventListener("click", () => {
    location.reload();
});

newLegBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to force a new leg?")) {
        game.startNewLeg();
        ui.scoreBoard();
    }
});


// --- KEYPAD LOGIC ---

// 1. Handle Number Clicks (Using Event Delegation)
keypad.addEventListener("click", (e) => {
    // Check if the clicked element has the class 'key' but NOT 'action-btn'
    if (e.target.matches(".key") && !e.target.classList.contains("action-btn")) {
        const value = e.target.dataset.val;

        // Prevent typing more than 3 digits
        if (turnInput.value.length < 3) {
            turnInput.value += value;
        }
    }
});

// 2. Handle Clear Button
clearBtn.addEventListener("click", () => {
    turnInput.value = "";
});

// 3. Handle Enter Button
enterBtn.addEventListener("click", () => {
    // Convert string input to number
    const points = parseInt(turnInput.value, 10);

    // Validation
    if (isNaN(points)) {
        alert("Enter a score first.");
        return;
    }

    if (points > 180 || points < 0) {
        alert("Score must be between 0 and 180.");
        turnInput.value = ""; 
        return;
    }

    // Execute Move
    game.throwDart(points);
    ui.scoreBoard();

    // Reset Input
    turnInput.value = "";
});