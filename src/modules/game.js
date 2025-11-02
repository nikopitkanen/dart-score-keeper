export const state = {
  players: [
    {
      name: "Player1",
      score: "301",
      legsWon: 0,
      turnHistory: [],
      dartsThrown: 0,
    },
    {
      name: "Player2",
      score: "301",
      legsWon: 0,
      turnHistory: [],
      dartsThrown: 0,
    },
  ],
  gameType: 301,
  currentPlayerIndex: 0,
  gameHistory: [],
};

export function newGame(p1, p2, gameType) {
  state.gameType = parseInt(gameType, 10);
  state.players[0] = {
    name: p1,
    score: state.gameType,
    legsWon: state.players[0].legsWon,
    turnHistory: 0,
    dartsThrown: 0,
  };
  state.players[1] = {
    name: p2,
    score: state.gameType,
    legsWon: state.players[0].legsWon,
    turnHistory: 0,
    dartsThrown: 0,
  };
  state.currentPlayerIndex = 0;
  state.gameHistory = [];
}
