export const state = {
  players: [],
  gameType: null,
  currentPlayerIndex: null,
  isGameOver: true,
};

export function newGame(p1, p2, gameType) {
  const gameSection = document.getElementById("game-section");
  const setupSection = document.getElementById("setup-section");
  gameSection.hidden = false;
  setupSection.hidden = true;
  state.gameType = parseInt(gameType, 10);
  const p1Legs = state.players[0] ? state.players[0].legsWon : 0;
  const p2Legs = state.players[1] ? state.players[1].legsWon : 0;
  state.players[0] = {
    name: p1,
    score: state.gameType,
    legsWon: p1Legs,
  };
  state.players[1] = {
    name: p2,
    score: state.gameType,
    legsWon: p2Legs,
  };
  state.currentPlayerIndex = 0;
  state.isGameOver = false;
}

export function throwDart(points) {
  const currentPlayer = state.players[state.currentPlayerIndex];
  currentPlayer.score -= points;

  if (currentPlayer.score < 0) {
    // Bust rule: score resets to previous value
    currentPlayer.score += points;
    nextTurn();
    return;
  }

  if (currentPlayer.score === 0) {
    // Player wins the leg
    currentPlayer.legsWon += 1;
    checkGameOver();
  } else {
    nextTurn();
  }
}

export function nextTurn() {
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
}

export function checkGameOver() {
  const winningLegs = 3; // best of 
  const winner = state.players.find(p => p.legsWon >= winningLegs);

  if (winner) {
    state.isGameOver = true;
    alert(`${winner.name} wins the match`);
  } else {
    // Reset scores for next leg
    state.players.forEach(p => p.score = state.gameType);
  }
}