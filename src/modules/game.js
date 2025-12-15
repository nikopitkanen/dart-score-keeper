export const state = {
  players: [],
  gameType: 501,
  legsToWin: 3,
  currentPlayerIndex: 0,
  isGameOver: true, // cant remember what this was for
  history: [],
};

export function newGame(p1, p2, gameType, legs) {
  // ? VISIBILITY
  const gameSection = document.getElementById("game-section");
  const setupSection = document.getElementById("setup-section");
  gameSection.hidden = false;
  setupSection.hidden = true;

  state.gameType = Number(gameType);
  state.legsToWin = Number(legs);
  state.players[0] = {
    name: p1,
    score: state.gameType,
    legsWon: 0,
  };
  state.players[1] = {
    name: p2,
    score: state.gameType,
    legsWon: 0,
  };

  state.currentPlayerIndex = 0;
  state.isGameOver = false;
}

export function turn(points) {
  const currentPlayer = state.players[state.currentPlayerIndex];
  const remainingScore = currentPlayer.score;
  let turnScore = points;

  if (turnScore > remainingScore || remainingScore - turnScore === 1) {
    turnScore = 0;
  }

  currentPlayer.score = remainingScore - turnScore;

  if (currentPlayer.score === 0) {
    currentPlayer.legsWon += 1;

    if (currentPlayer.legsWon >= state.legsToWin) {
      console.log("winning");
    } else {
      console.log("game continues");
      state.players.forEach((p) => (p.score = state.gameType));
      state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    }
  } else {
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
  }
}

export function undo() {
  if (state.history.length > 0) {
    state.history.pop();
  } else {
    console.log("nothing to undo");
  }
}
