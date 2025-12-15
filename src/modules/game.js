export const state = {
  players: [],
  gameType: 501,
  legsToWin: 3,
  currentPlayerIndex: 0,
  isGameOver: false,
  history: [],
};

export function newGame(p1, p2, gameType, legs) {
  const gameSection = document.getElementById("game-section");
  const setupSection = document.getElementById("setup-section");
  gameSection.hidden = false;
  setupSection.hidden = true;

  state.gameType = parseInt(gameType, 10);
  state.legsToWin = parseInt(legs, 10);
  state.history = []; // Reset history on new game

  state.players = [
    { name: p1, score: state.gameType, legsWon: 0 },
    { name: p2, score: state.gameType, legsWon: 0 },
  ];

  state.currentPlayerIndex = 0;
  state.isGameOver = false;
}

export function throwDart(points) {
  if (state.isGameOver) return;

  const currentPlayer = state.players[state.currentPlayerIndex];
  const remainingScore = currentPlayer.score;
 
  let newScore = remainingScore - points;

  if (newScore < 0 || newScore === 1) {
    console.log("Bust!");
    nextTurn();
    return;
  }

  currentPlayer.score = newScore;

  if (currentPlayer.score === 0) {
    handleLegWin(currentPlayer);
  } else {
    nextTurn();
  }
}

export function undo() {
  if (state.history.length > 0) {
    state.history.pop();
  } else {
    console.log("nothing to undo");
  }

export function startNewLeg() {
  state.players.forEach((p) => (p.score = state.gameType));
  state.isGameOver = false;
}

function nextTurn() {
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
}

function handleLegWin(player) {
  player.legsWon += 1;

  if (player.legsWon >= state.legsToWin) {
    state.isGameOver = true;
    alert(`${player.name} wins the match!`);
  } else {
    alert(`${player.name} wins the leg!`);
    startNewLeg();
  }
}
}