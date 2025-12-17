import * as game from "./modules/game.js";
import * as ui from "./modules/ui.js";

// DOM Elements
const p1Input = document.getElementById("player-1");
const p2Input = document.getElementById("player-2");
const gameTypeSelect = document.getElementById("game-type");
const legsSelect = document.getElementById("set-size");
const startGameBtn = document.getElementById("start-game");
const undoTurnBtn = document.getElementById("undo-turn");
const newLegBtn = document.getElementById("new-leg");
const resetGameBtn = document.getElementById("reset-game");

// Keypad Elements
const keypad = document.getElementById("keypad");
const turnInput = document.getElementById("turn-score");
const clearBtn = document.getElementById("clear-btn");
const enterBtn = document.getElementById("enter-btn");

// Dialog Elements
const confirmDialog = document.getElementById("confirm-dialog");
const dialogTitle = document.getElementById("dialog-title");
const dialogMsg = document.getElementById("dialog-msg");
const dialogConfirmBtn = document.getElementById("dialog-confirm");
const dialogCancelBtn = document.getElementById("dialog-cancel");

// Variable to store the pending action for the dialog
let pendingAction = null;


// Helper funcs

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

function showConfirmation(title, message, actionCallback) {
    dialogTitle.textContent = title;
    dialogMsg.textContent = message;
    pendingAction = actionCallback;
    confirmDialog.showModal();
}


// Event Listeners game controls

startGameBtn.addEventListener("click", handleNewGame);

// undo button with dialog
undoTurnBtn.addEventListener("click", () => {
    //  check to see if game has started/history exists
    if (!game.state.history || game.state.history.length === 0) {
        // opt show a small alert or ignore
        return; 
    }
    
    showConfirmation(
        "Undo Last Turn?",
        "This will revert the score to the previous state.",
        () => {
            game.undoLastTurn();
            ui.scoreBoard();
        }
    );
});

// reset button dialog
resetGameBtn.addEventListener("click", () => {
    showConfirmation(
        "Reset Game?",
        "All progress will be lost and the page will reload.",
        () => {
            location.reload();
        }
    );
});

// new leg btn
newLegBtn.addEventListener("click", () => {
    showConfirmation(
        "Force New Leg?",
        "This will reset scores for the current leg. Are you sure?",
        () => {
            game.startNewLeg();
            ui.scoreBoard();
        }
    );
});


// dialog actions event listener

dialogConfirmBtn.addEventListener("click", () => {
    if (pendingAction) {
        pendingAction();
        pendingAction = null;
    }
    confirmDialog.close();
});

dialogCancelBtn.addEventListener("click", () => {
    pendingAction = null;
    confirmDialog.close();
});


// keypad logic event listener

// 1. Number Buttons
keypad.addEventListener("click", (e) => {
    if (game.state.isGameOver) return; // Stop input if game is over

    if (e.target.matches(".key") && !e.target.classList.contains("action-btn")) {
        const value = e.target.dataset.val;

        // Prevent typing more than 3 digits
        if (turnInput.value.length < 3) {
            turnInput.value += value;
        }
    }
});

// 2. Clear Button
clearBtn.addEventListener("click", () => {
    turnInput.value = "";
});

// 3. Enter Button
enterBtn.addEventListener("click", () => {
    if (game.state.isGameOver) return;

    const points = parseInt(turnInput.value, 10);

    // Validation
    if (isNaN(points)) {
        // You could use a custom dialog here too if you wanted
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