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
