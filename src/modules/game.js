export const state = {
  players: [
    {
      name: "Player1",
      score: "301",
    },
    {
      name: "Player2",
      score: "301",
    },
  ],
  gameType: 301,
};

export function newGame(p1, p2, gameType) {
  state.gameType = parseInt(gameType, 10);
  state.players[0] = { name: p1, score: state.gameType };
  state.players[1] = { name: p2, score: state.gameType };
}
